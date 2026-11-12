import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import { ForgotPassword, ForgotPasswordReset } from '.';

const errorMessages = () =>
  Array.from(
    document.querySelectorAll('.unl-forgotPassword__error-message'),
  ).map((el) => el.textContent);

const submitButton = () =>
  document.querySelector('.unl-forgotPassword__button') as HTMLButtonElement;

describe('<ForgotPasswordContainer />', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handler: jest.fn().mockResolvedValue({ success: true }),
      onSuccess: jest.fn(),
    };
  });

  const submitEmail = async (email: string) => {
    const user = userEvent.setup();
    render(<ForgotPassword {...props} />);

    if (email) await user.type(screen.getByLabelText('Email'), email);
    await user.click(submitButton());
    return user;
  };

  it('renders without crashing', () => {
    const { container } = render(<ForgotPassword {...props} />);

    expect(
      document.querySelector('.unl-forgotPassword__container'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(submitButton()).toHaveTextContent('Next');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('requires an email', async () => {
    await submitEmail('');

    await waitFor(() =>
      expect(errorMessages()).toContain('Please enter your email'),
    );
    expect(props.handler).not.toHaveBeenCalled();
  });

  it('requires a valid email', async () => {
    await submitEmail('bademail');

    await waitFor(() =>
      expect(errorMessages()).toContain('Please enter a valid email'),
    );
    expect(props.handler).not.toHaveBeenCalled();
  });

  it('submits the email and shows the confirmation message', async () => {
    await submitEmail('good@email.com');

    await waitFor(() =>
      expect(props.handler).toHaveBeenCalledWith({ email: 'good@email.com' }),
    );
    await waitFor(() =>
      expect(
        document.querySelector('.unl-forgotPassword__confirmation'),
      ).toBeInTheDocument(),
    );
    await waitFor(() => expect(props.onSuccess).toHaveBeenCalled());
  });

  it('renders server errors returned by the handler', async () => {
    props.handler.mockResolvedValue({
      success: false,
      errors: { root: 'No account with that email' },
    });

    await submitEmail('good@email.com');

    await waitFor(() =>
      expect(
        document.querySelector('.unl-forgotPassword__server-auth-error'),
      ).toHaveTextContent('No account with that email'),
    );
  });

  it('supports a custom success message', async () => {
    const user = userEvent.setup();
    render(
      <ForgotPassword {...props} successMessage="Check your spam folder" />,
    );

    await user.type(screen.getByLabelText('Email'), 'good@email.com');
    await user.click(submitButton());

    await waitFor(() =>
      expect(screen.getByText('Check your spam folder')).toBeInTheDocument(),
    );
  });
});

describe('<ForgotPasswordReset />', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handler: jest.fn().mockResolvedValue({ success: true }),
      onSuccess: jest.fn(),
    };
  });

  const submitPasswords = async (newPassword: string, confirm: string) => {
    const user = userEvent.setup();
    render(<ForgotPasswordReset {...props} />);

    if (newPassword)
      await user.type(screen.getByLabelText('New password'), newPassword);
    if (confirm) {
      await user.type(screen.getByLabelText('Password confirm'), confirm);
    }
    await user.click(submitButton());
    return user;
  };

  it('renders without crashing', () => {
    render(<ForgotPasswordReset {...props} />);

    expect(
      document.querySelector('.unl-forgotPassword__container'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('New password')).toBeInTheDocument();
    expect(screen.getByLabelText('Password confirm')).toBeInTheDocument();
    expect(submitButton()).toHaveTextContent('Update Password');
  });

  it('requires a strong enough password', async () => {
    await submitPasswords('abcdefgh', 'abcdefgh');

    await waitFor(() =>
      expect(errorMessages()).toContain(
        'Password must have at least 8 characters and contain at least 1 letter and 1 number',
      ),
    );
    expect(props.handler).not.toHaveBeenCalled();
  });

  it('requires the passwords to match', async () => {
    await submitPasswords('goodpassword1', 'differentpassword1');

    await waitFor(() =>
      expect(errorMessages()).toContain('Passwords must match'),
    );
    expect(props.handler).not.toHaveBeenCalled();
  });

  it('submits the new password and shows the confirmation', async () => {
    await submitPasswords('goodpassword1', 'goodpassword1');

    await waitFor(() =>
      expect(props.handler).toHaveBeenCalledWith({
        newPassword: 'goodpassword1',
        newPasswordConfirm: 'goodpassword1',
      }),
    );
    await waitFor(() =>
      expect(
        document.querySelector('.unl-forgotPassword__reset-confirmation'),
      ).toHaveTextContent('Thank you.'),
    );
  });
});
