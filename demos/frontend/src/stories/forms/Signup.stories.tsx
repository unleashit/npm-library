import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import LinkTo from '@storybook/addon-links/react';
import Signup, { FormValues, ServerResponse } from '@unleashit/signup';
import { formComponentNotes } from '../../lib/baseNotes.tsx';
import {
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';
import { Modal } from '@unleashit/modal';
import '@unleashit/signup/dist/signup.css';
import '@unleashit/modal/dist/modal.css';
import { useUpdateDarkMode } from '../../lib/hooks/useUpdateDarkMode.ts';
import signupSchema, { signupFields } from './customFields/signupFields.ts';
import { backendDemoHandler } from '../../lib/backendDemoHandler.ts';
import { makeNotes } from '../../lib/Notes.tsx';

const SignupWithChildren: Story['render'] = (args, ctx) => {
  useUpdateDarkMode(ctx);

  return (
    <Signup
      {...args}
      isFocused={ctx.viewMode !== 'docs'}
      {...(ctx.viewMode === 'docs'
        ? { darkMode: ctx.globals.scheme === 'dark mode' }
        : {})}
    >
      <TwitterLoginButton
        onClick={action('twitterLogin')}
        style={{ width: '100%', margin: '0 0 .7rem 0' }}
      />
      <GithubLoginButton
        onClick={action('githubLogin')}
        style={{ width: '100%', margin: '0' }}
      />
    </Signup>
  );
};

const meta = {
  title: 'forms/Signup',
  component: Signup,
  tags: ['autodocs'],
  argTypes: {
    header: {
      table: {
        type: { summary: 'ComponentType | ReactNode | false' },
        defaultValue: { summary: 'Default Header' },
      },
    },
    successMessage: {
      control: 'null',
      table: {
        type: { summary: 'ComponentType | string | false' },
      },
    },
    loginLink: {
      control: 'null',
      table: {
        type: { summary: 'ComponentType | ReactNode | false' },
      },
    },
    loader: {
      table: {
        defaultValue: { summary: 'Default Spinner' },
      },
    },
    customFields: {
      table: {
        defaultValue: { summary: 'Default Fields' },
      },
    },
    customSchema: {
      table: {
        type: { summary: 'AnyZodSchema' },
        defaultValue: { summary: 'Default Zod Schema' },
      },
    },
  },
  args: {
    handler: backendDemoHandler<FormValues, ServerResponse>({
      route: '/signup',
    }),
    onSuccess: (resp: ServerResponse) => {
      action('onSuccess')(resp);
    },
    successMessage: () => (
      <div className="success-message">
        <p>Welcome! Thanks for signing up.</p>
        <p>
          This message has been set by the <i>successMessage</i> prop. When{' '}
          <i>successMessage</i> isn't provided or is set to false, be sure to
          provide an <i>onSuccess</i> prop with a redirect or other behavior.
        </p>
      </div>
    ),
    loginLink: () => (
      <LinkTo name="basic" title="forms-login">
        Login
      </LinkTo>
    ),
  },
  parameters: {
    notes: [
      formComponentNotes,
      ...makeNotes(
        <>
          To test the UI for an already existing user you may use:{' '}
          <b>test@test.com</b>. All other emails that otherwise pass validations
          should succeed.
        </>,
      ),
    ],
  },
  decorators: [
    // Wrapper to style forms components (centered, smaller max-width)
    (Story) => {
      return <div className="max-width-container">{Story()}</div>;
    },
  ],
  render: (args, ctx) => {
    useUpdateDarkMode(ctx);

    return (
      <Signup
        {...args}
        /** don't focus on docs page since it causes issues */
        isFocused={ctx.viewMode === 'docs' ? false : args.isFocused}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof Signup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const SocialLoginsBelow: Story = {
  args: {},
  render: SignupWithChildren,
};

export const SocialLoginsAbove: Story = {
  args: { childrenPosition: 'top' },
  render: SignupWithChildren,
};

export const CustomFields: Story = {
  args: {
    customFields: signupFields,
    customSchema: signupSchema,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        [
          <>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(signupFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>customSchema prop:</span>
            <pre>
              <code>{`z
  .object({
    name: z.string().max(50, { message: 'Name is too long' }).default(''),
    email: z
      .string({ required_error: 'Please enter your email' })
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please enter a valid email' })
      .max(50, { message: 'Email is too long' })
      .default(''),
    password: z
      .string({ required_error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .min(8)
      .max(56)
      .default(''),
    passwordConfirm: z
      .string({ required_error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .min(8)
      .max(56)
      .default(''),
    newsletter: z.boolean().default(true),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });
          `}</code>
            </pre>
          </>,
        ],
        'div',
      ),
    ],
  },
};

export const CustomHeader: Story = {
  args: {
    buttonText: 'Next',
    header: (
      <>
        <h2>Create Account</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
    ),
  },
};

const SubmitPlay: (success?: boolean) => Story['play'] =
  (success = true) =>
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter credentials', async () => {
      const emailInput = canvas.getByLabelText('Email', {
        selector: 'input',
      });

      await userEvent.type(
        emailInput,
        success ? 'new@user.com' : 'test@test.com',
        {
          delay: 150,
        },
      );

      const passwordInput = canvas.getByLabelText('Password', {
        selector: 'input',
      });

      await userEvent.type(passwordInput, '12345678', {
        delay: 150,
      });

      const passwordConfirmInput = canvas.getByLabelText('Password confirm', {
        selector: 'input',
      });

      await userEvent.type(passwordConfirmInput, '12345678', {
        delay: 150,
      });
    });

    await step('Submit form', async () => {
      await fireEvent.click(canvas.getByRole('button'));
    });
  };

export const GoodCredentials: Story = {
  args: {},
  play: SubmitPlay(),
};

export const BadCredentials: Story = {
  args: {},
  play: SubmitPlay(false),
};

export const Catch: Story = {
  args: {
    handler: () => {
      const err = new Error('User unfriendly error');
      action('rejected')(err);
      return Promise.reject(err);
    },
    failMsg: 'Problem connecting to the network. Are you online?',
  },
  play: SubmitPlay(),
  parameters: {
    notes: [
      ...meta.parameters.notes,
      ...makeNotes(
        'If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop',
      ),
    ],
  },
};

export const InAModal: Story = {
  args: {
    isFocused: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: (args) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setModalOpen(true)}
          style={{
            display: 'flex',
            margin: 'auto',
            padding: '.7rem 1rem',
          }}
        >
          Login
        </button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          cssVars={{ modalPadding: '2.2rem' }}
        >
          <Signup {...args} />
        </Modal>
      </div>
    );
  },
};
