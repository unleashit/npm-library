import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import SignupContainer from '.';

const errorMessages = () =>
  Array.from(document.querySelectorAll('.unl-signup__error-message')).map(
    (el) => el.textContent,
  );

const submitButton = () =>
  document.querySelector('.unl-signup__button') as HTMLButtonElement;

describe('<SignupContainer />', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handler: jest.fn().mockResolvedValue({ success: true }),
      onSuccess: jest.fn(),
    };
  });

  const fill = async (
    values: Record<string, string>,
    extraProps: Record<string, unknown> = {},
  ) => {
    const user = userEvent.setup();
    render(<SignupContainer {...props} {...extraProps} />);

    // eslint-disable-next-line no-restricted-syntax
    for (const [label, value] of Object.entries(values)) {
      // userEvent interactions have to be awaited one at a time
      // eslint-disable-next-line no-await-in-loop
      await user.type(screen.getByLabelText(label), value);
    }
    await user.click(submitButton());
    return user;
  };

  it('renders without crashing', () => {
    const { container } = render(<SignupContainer {...props} />);

    expect(
      document.querySelector('.unl-signup__container'),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders all three fields', () => {
    render(<SignupContainer {...props} />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Password confirm')).toBeInTheDocument();
  });

  it('focuses the email field by default', async () => {
    render(<SignupContainer {...props} />);

    await waitFor(() => expect(screen.getByLabelText('Email')).toHaveFocus());
  });

  describe('validation', () => {
    it('fields can be updated and validated', async () => {
      const user = userEvent.setup();
      render(<SignupContainer {...props} />);

      const email = screen.getByLabelText('Email');
      await user.type(email, 'test@test.com');
      await user.tab();

      expect(email).toHaveValue('test@test.com');
      expect(errorMessages()).toHaveLength(0);
    });

    it('displays correct email validation errors', async () => {
      const user = userEvent.setup();
      render(<SignupContainer {...props} />);

      // email can't be empty
      await user.type(screen.getByLabelText('Password'), 'goodpassword');
      await user.click(submitButton());
      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter your email'),
      );

      // email must be a valid email
      await user.clear(screen.getByLabelText('Email'));
      await user.type(screen.getByLabelText('Email'), 'bad email');
      await user.tab();

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter a valid email'),
      );
    });

    it('displays correct password validation errors', async () => {
      const user = userEvent.setup();
      render(<SignupContainer {...props} />);

      // password field can't be empty
      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.click(submitButton());
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

    it('requires the password to be confirmed', async () => {
      const user = userEvent.setup();
      render(<SignupContainer {...props} />);

      await user.type(screen.getByLabelText('Email'), 'good@email.com');
      await user.type(screen.getByLabelText('Password'), 'goodpassword');
      await user.click(submitButton());

      await waitFor(() =>
        expect(errorMessages()).toContain('Please enter the password again'),
      );
      expect(props.handler).not.toHaveBeenCalled();
    });

    it('rejects mismatched passwords', async () => {
      await fill({
        Email: 'good@email.com',
        Password: 'goodpassword',
        'Password confirm': 'differentpassword',
      });

      await waitFor(() =>
        expect(errorMessages()).toContain('Passwords must match'),
      );
      expect(props.handler).not.toHaveBeenCalled();
    });
  });

  describe('submission', () => {
    it('calls the handler with the form values and fires onSuccess', async () => {
      await fill({
        Email: 'good@email.com',
        Password: 'goodpassword',
        'Password confirm': 'goodpassword',
      });

      await waitFor(() =>
        expect(props.handler).toHaveBeenCalledWith({
          email: 'good@email.com',
          password: 'goodpassword',
          passwordConfirm: 'goodpassword',
        }),
      );
      await waitFor(() => expect(props.onSuccess).toHaveBeenCalled());
    });

    it('renders server errors returned by the handler', async () => {
      props.handler.mockResolvedValue({
        success: false,
        errors: { root: 'Email already in use' },
      });

      await fill({
        Email: 'good@email.com',
        Password: 'goodpassword',
        'Password confirm': 'goodpassword',
      });

      await waitFor(() =>
        expect(
          document.querySelector('.unl-signup__server-auth-error'),
        ).toHaveTextContent('Email already in use'),
      );
    });

    it('shows the success message after a successful submit', async () => {
      props.handler.mockResolvedValue({ success: true });

      await fill(
        {
          Email: 'good@email.com',
          Password: 'goodpassword',
          'Password confirm': 'goodpassword',
        },
        { successMessage: 'Account created' },
      );

      await waitFor(() =>
        expect(
          document.querySelector('.unl-signup__success'),
        ).toHaveTextContent('Account created'),
      );
    });
  });
});
