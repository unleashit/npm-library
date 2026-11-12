import { z } from 'zod';

import { formHandler } from '../formHandler';
import * as constants from '../constants';

const schema = z.object({ email: z.string().default('') });

/**
 * `formHandler` owns the submit lifecycle of every form component: server
 * responses, field/root error mapping, toasts and the generic failure message.
 */
describe('formHandler()', () => {
  let args: any;

  beforeEach(() => {
    args = {
      schema,
      handler: jest.fn(),
      onSuccess: jest.fn(),
      toast: jest.fn(),
      setValue: jest.fn(),
      setError: jest.fn(),
      reset: jest.fn(),
    };
  });

  const submit = (values: Record<string, any> = { email: 'a@b.co' }) =>
    formHandler(args)(values as any, undefined as any);

  it('resets the form and calls onSuccess on success', async () => {
    const resp = { success: true, data: { id: 1 } };
    args.handler.mockResolvedValue(resp);

    await submit();

    expect(args.handler).toHaveBeenCalledWith({ email: 'a@b.co' });
    expect(args.reset).toHaveBeenCalledTimes(1);
    expect(args.onSuccess).toHaveBeenCalledWith(resp);
    expect(args.setError).not.toHaveBeenCalled();
  });

  it('maps server field errors onto the fields', async () => {
    args.handler.mockResolvedValue({
      success: false,
      errors: { email: 'Email not found' },
    });

    await submit();

    expect(args.setError).toHaveBeenCalledWith('email', {
      type: 'server',
      message: 'Email not found',
    });
    expect(args.reset).not.toHaveBeenCalled();
  });

  it('uses the first message when the server sends an array', async () => {
    args.handler.mockResolvedValue({
      success: false,
      errors: { email: ['first', 'second'] },
    });

    await submit();

    expect(args.setError).toHaveBeenCalledWith('email', {
      type: 'server',
      message: 'first',
    });
  });

  it('sets and toasts a root error', async () => {
    args.handler.mockResolvedValue({
      success: false,
      errors: { root: 'Server exploded' },
    });

    await submit();

    expect(args.toast).toHaveBeenCalledWith('Server exploded');
    expect(args.setError).toHaveBeenCalledWith('root', {
      type: 'server',
      message: 'Server exploded',
    });
  });

  it('clears the listed fields on a server error', async () => {
    args.clearOnError = ['password'];
    args.handler.mockResolvedValue({
      success: false,
      errors: { root: 'nope' },
    });

    await submit();

    expect(args.setValue).toHaveBeenCalledWith('password', '');
  });

  it('leaves values alone when clearOnError is empty', async () => {
    args.clearOnError = [];
    args.handler.mockResolvedValue({
      success: false,
      errors: { root: 'nope' },
    });

    await submit();

    expect(args.setValue).not.toHaveBeenCalled();
  });

  it('falls back to the generic failure message when there are no errors', async () => {
    args.handler.mockResolvedValue({ success: false });

    await submit();

    expect(args.toast).toHaveBeenCalledWith(constants.baseFailMsg);
    expect(args.setError).toHaveBeenCalledWith('root', {
      type: 'server',
      message: constants.baseFailMsg,
    });
  });

  it('surfaces the thrown error message when the handler rejects', async () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    args.handler.mockRejectedValue(new Error('network down'));

    await submit();

    expect(args.toast).toHaveBeenCalledWith('network down');
    expect(args.setError).toHaveBeenCalledWith('root', {
      type: 'catch',
      message: 'network down',
    });
    errorSpy.mockRestore();
  });

  it('prefers a custom failMsg over the rejection message', async () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    args.failMsg = 'Something went wrong on our end';
    args.handler.mockRejectedValue(new Error('network down'));

    await submit();

    expect(args.toast).toHaveBeenCalledWith('Something went wrong on our end');
    errorSpy.mockRestore();
  });
});
