import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import LoginContainer from '.';

const ERROR_SELECTOR = '.unl-login__error-message';

const errorMessages = () =>
  Array.from(document.querySelectorAll(ERROR_SELECTOR)).map(
    (el) => el.textContent,
  );

/**
 * Enzyme's `mount(...).simulate('change', changeVal(...))` is replaced with real
 * events. The form validates `onBlur`, so fields are blurred (tabbed out of)
 * before asserting.
 */
describe('<LoginContainer />', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handler: jest.fn().mockResolvedValue({ success: true }),
      onSuccess: jest.fn(),
    };
  });

  it('renders without crashing', () => {
    const { container } = render(<LoginContainer {...props} />);

    expect(document.querySelector('.unl-login__container')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('focuses the email field by default', async () => {
    render(<LoginContainer {...props} />);

    // react-hook-form defers setFocus, so wait for the browser to apply it
    await waitFor(() => expect(screen.getByLabelText('Email')).toHaveFocus());
  });

  it('does not focus a field when isFocused is false', () => {
    render(<LoginContainer {...props} isFocused={false} />);

    expect(screen.getByLabelText('Email')).not.toHaveFocus();
  });

  describe('validation', () => {
    it('fields can be updated and validated', async () => {
      const user = userEvent.setup();
      render(<LoginContainer {...props} />);

      const email = screen.getByLabelText('Email');
      await user.type(email, 'test@test.com');
      await user.tab();

      expect(email).toHaveValue('test@test.com');
      expect(errorMessages()).toHaveLength(0);
    });

    it('displays correct email validation errors', async () => {
      const user = userEvent.setup();
      render(<LoginContainer {...props} />);

      // email can't be empty
      await user.type(screen.getByLabelText('Password'), 'goodpassword');
      await user.click(screen.getByRole('button', { name: /log ?in/i }));

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter your email'),
      );

      // email must be a valid email
      await user.clear(screen.getByLabelText('Email'));
      await user.type(screen.getByLabelText('Email'), 'bademail');
      await user.tab();

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter a valid email'),
      );
    });

    it('displays correct password validation errors', async () => {
      const user = userEvent.setup();
      render(<LoginContainer {...props} />);

      // password field can't be empty
      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.click(screen.getByRole('button', { name: /log ?in/i }));

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter a password'),
      );

      // password must be at least 8 chars
      await user.clear(screen.getByLabelText('Password'));
      await user.type(screen.getByLabelText('Password'), '123');
      await user.tab();

      await waitFor(() =>
        expect(errorMessages()).toContain(
          'Password must be at least 8 characters',
        ),
      );
    });

    it('clears an error once the field becomes valid', async () => {
      const user = userEvent.setup();
      render(<LoginContainer {...props} />);

      await user.click(screen.getByRole('button', { name: /log ?in/i }));
      await waitFor(() => expect(errorMessages().length).toBeGreaterThan(0));

      await user.clear(screen.getByLabelText('Email'));
      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.tab();

      await waitFor(() =>
        expect(errorMessages()).not.toContain('Please enter your email'),
      );
    });
  });

  describe('submission', () => {
    const submitWith = async (values: { email: string; password: string }) => {
      const user = userEvent.setup();
      render(<LoginContainer {...props} />);

      await user.type(screen.getByLabelText('Email'), values.email);
      await user.type(screen.getByLabelText('Password'), values.password);
      await user.click(screen.getByRole('button', { name: /log ?in/i }));
      return user;
    };

    it('calls the handler with the form values and fires onSuccess', async () => {
      await submitWith({ email: 'good@email.com', password: 'goodpassword' });

      await waitFor(() =>
        expect(props.handler).toHaveBeenCalledWith({
          email: 'good@email.com',
          password: 'goodpassword',
        }),
      );
      await waitFor(() => expect(props.onSuccess).toHaveBeenCalled());
    });

    it('does not call the handler when validation fails', async () => {
      await submitWith({ email: 'bademail', password: '123' });

      await waitFor(() => expect(errorMessages().length).toBeGreaterThan(0));
      expect(props.handler).not.toHaveBeenCalled();
    });

    it('renders server errors returned by the handler', async () => {
      props.handler.mockResolvedValue({
        success: false,
        errors: { root: 'Unable to login with those credentials' },
      });

      await submitWith({ email: 'good@email.com', password: 'goodpassword' });

      await waitFor(() =>
        expect(
          document.querySelector('.unl-login__server-auth-error'),
        ).toHaveTextContent('Unable to login with those credentials'),
      );
    });

    it('routes field level server errors to the field', async () => {
      props.handler.mockResolvedValue({
        success: false,
        errors: { email: 'No account found' },
      });

      await submitWith({ email: 'good@email.com', password: 'goodpassword' });

      await waitFor(() =>
        expect(errorMessages()).toContain('No account found'),
      );
    });

    it('uses the toast callback instead of rendering a root error', async () => {
      const toast = jest.fn();
      props.toast = toast;
      props.handler.mockResolvedValue({
        success: false,
        errors: { root: 'boom' },
      });

      await submitWith({ email: 'good@email.com', password: 'goodpassword' });

      await waitFor(() => expect(toast).toHaveBeenCalledWith('boom'));
      expect(
        document.querySelector('.unl-login__server-auth-error'),
      ).not.toBeInTheDocument();
    });

    it('shows a generic failure message when the handler rejects', async () => {
      const toast = jest.fn();
      props.toast = toast;
      props.handler.mockRejectedValue(new Error('network down'));
      const errorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);

      await submitWith({ email: 'good@email.com', password: 'goodpassword' });

      await waitFor(() => expect(toast).toHaveBeenCalledWith('network down'));
      errorSpy.mockRestore();
    });
  });
});
