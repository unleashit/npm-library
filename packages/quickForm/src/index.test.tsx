import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import { z } from 'zod';

import QuickForm from '.';

const P = 'unl-quickForm';

const errorMessages = () =>
  Array.from(document.querySelectorAll(`.${P}__error-message`)).map(
    (el) => el.textContent,
  );

const submitButton = () =>
  document.querySelector(`.${P}__button`) as HTMLButtonElement;

const longMessage = 'This message is definitely long enough to pass.';

describe('<QuickForm />', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handler: jest.fn().mockResolvedValue({ success: true }),
      onSuccess: jest.fn(),
    };
  });

  const fillAndSubmit = async (values: Record<string, string> = {}) => {
    const user = userEvent.setup();
    render(<QuickForm {...props} />);

    // eslint-disable-next-line no-restricted-syntax
    for (const [label, value] of Object.entries(values)) {
      // userEvent interactions have to be awaited one at a time
      // eslint-disable-next-line no-await-in-loop
      await user.type(screen.getByLabelText(label), value);
    }
    await user.click(submitButton());
    return user;
  };

  it('renders the contact fields', () => {
    const { container } = render(<QuickForm {...props} />);

    expect(document.querySelector(`.${P}__container`)).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(submitButton()).toHaveTextContent('Send Message');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('adds a phone field with showPhone', () => {
    render(<QuickForm {...props} showPhone />);

    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
  });

  it('renders a header and optional footer', () => {
    render(
      <QuickForm
        {...props}
        headerText="Get in touch"
        footer={() => <p>footer text</p>}
      />,
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Get in touch');
    expect(screen.getByText('footer text')).toBeInTheDocument();
  });

  describe('validation', () => {
    it('requires every field', async () => {
      await fillAndSubmit();

      await waitFor(() =>
        expect(errorMessages()).toEqual(
          expect.arrayContaining([
            'Please enter your name',
            'Please enter your email',
            'Please enter a message',
          ]),
        ),
      );
      expect(props.handler).not.toHaveBeenCalled();
    });

    it('requires a valid email', async () => {
      await fillAndSubmit({
        Name: 'Joe',
        Email: 'bademail',
        Message: longMessage,
      });

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter a valid email'),
      );
      expect(props.handler).not.toHaveBeenCalled();
    });

    it('rejects messages that are too short', async () => {
      await fillAndSubmit({
        Name: 'Joe',
        Email: 'good@email.com',
        Message: 'hi there',
      });

      await waitFor(() =>
        expect(errorMessages()).toContain('Message is too short'),
      );
    });

    it('accepts a valid submission', async () => {
      await fillAndSubmit({
        Name: 'Joe',
        Email: 'good@email.com',
        Message: longMessage,
      });

      await waitFor(() => expect(props.handler).toHaveBeenCalled());
      expect(errorMessages()).toHaveLength(0);
    });
  });

  describe('submission', () => {
    it('calls the handler with the form values and fires onSuccess', async () => {
      await fillAndSubmit({
        Name: 'Joe',
        Email: 'good@email.com',
        Message: longMessage,
      });

      await waitFor(() =>
        expect(props.handler).toHaveBeenCalledWith({
          name: 'Joe',
          email: 'good@email.com',
          message: longMessage,
        }),
      );
      await waitFor(() => expect(props.onSuccess).toHaveBeenCalled());
    });

    it('shows the default success message after submitting', async () => {
      await fillAndSubmit({
        Name: 'Joe',
        Email: 'good@email.com',
        Message: longMessage,
      });

      await waitFor(() =>
        expect(document.querySelector(`.${P}__success`)).toHaveTextContent(
          'Thanks for your message!',
        ),
      );
    });

    it('hides the success message after successMessageTimeout', async () => {
      const user = userEvent.setup();
      render(<QuickForm {...props} successMessageTimeout={50} />);

      await user.type(screen.getByLabelText('Name'), 'Joe');
      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.type(screen.getByLabelText('Message'), longMessage);
      await user.click(submitButton());

      await waitFor(() =>
        expect(document.querySelector(`.${P}__success`)).toBeInTheDocument(),
      );
      await waitFor(() =>
        expect(
          document.querySelector(`.${P}__success`),
        ).not.toBeInTheDocument(),
      );
    });

    it('renders server errors on the offending field', async () => {
      props.handler.mockResolvedValue({
        success: false,
        errors: { email: 'Email already contacted' },
      });

      await fillAndSubmit({
        Name: 'Joe',
        Email: 'good@email.com',
        Message: longMessage,
      });

      await waitFor(() =>
        expect(errorMessages()).toContain('Email already contacted'),
      );
    });

    it('clears fields marked clearOnServerError when the server rejects', async () => {
      const fields = [
        {
          element: 'input' as const,
          type: 'text',
          name: 'name',
          label: 'Name',
        },
        {
          element: 'input' as const,
          type: 'text',
          name: 'email',
          label: 'Email',
          clearOnServerError: true,
        },
      ];
      props.customFields = fields;
      // the default contact schema requires a message the custom fields omit
      props.customSchema = z.object({
        name: z.string().default(''),
        email: z.string().default(''),
      });
      props.handler.mockResolvedValue({
        success: false,
        errors: { root: 'nope' },
      });

      const user = userEvent.setup();
      render(<QuickForm {...props} />);

      await user.type(screen.getByLabelText('Name'), 'Joe');
      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.click(submitButton());

      await waitFor(() =>
        expect(screen.getByLabelText('Email')).toHaveValue(''),
      );
      expect(screen.getByLabelText('Name')).toHaveValue('Joe');
    });
  });
});
