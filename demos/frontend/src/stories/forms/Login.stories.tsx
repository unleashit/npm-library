import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, fireEvent } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import LinkTo from '@storybook/addon-links/react';
import Login, { FormValues, ServerResponse } from '@unleashit/login';
import { Modal } from '@unleashit/modal';
import {
  GithubLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';
import loginSchema, { loginFields } from './customFields/loginFields.ts';
import { formComponentNotes } from '../../lib/baseNotes.tsx';
import { useUpdateDarkMode } from '../../lib/hooks/useUpdateDarkMode.ts';
import { backendDemoHandler } from '../../lib/backendDemoHandler.ts';
import { makeNotes } from '../../lib/Notes.tsx';
import '@unleashit/login/dist/login.css';
import '@unleashit/modal/dist/modal.css';
import { WithMaxWidthDecorator } from '../../lib/decorators/WithMaxWidthDecorator.tsx';

const LoginWithChildren: Story['render'] = (args, ctx) => {
  useUpdateDarkMode(ctx);

  return (
    <Login
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
    </Login>
  );
};

const meta = {
  title: 'forms/Login',
  component: Login,
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
    signupLink: {
      control: 'null',
      table: {
        type: { summary: 'ComponentType | ReactNode | false' },
      },
    },
    forgotPasswordLink: {
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
        defaultValue: {
          summary: 'Default Zod Schema',
        },
      },
    },
  },
  args: {
    handler: backendDemoHandler<FormValues, ServerResponse>({
      route: '/login',
    }),
    successMessage: () => (
      <div className="success-message">
        <p>You are now logged in.</p>
        <p>
          This message has been set by the <i>successMessage</i> prop. When{' '}
          <i>successMessage</i> isn't provided or is set to false, be sure to
          provide an <i>onSuccess</i> prop with a redirect or other behavior.
        </p>
      </div>
    ),
    forgotPasswordLink: (
      <LinkTo name="basic" title="forms-forgot-password">
        Forgot password?
      </LinkTo>
    ),
    signupLink: (
      <LinkTo name="basic" title="forms-signup">
        Signup
      </LinkTo>
    ),
  },
  parameters: {
    notes: [
      formComponentNotes,
      ...makeNotes([
        <>
          To test the UI for a valid login, you may use:{' '}
          <strong>test@test.com</strong> (email) and <strong>12345678</strong>{' '}
          (password). All other users should fail.
        </>,
      ]),
    ],
  },
  decorators: [WithMaxWidthDecorator],
  render: (args, ctx) => {
    useUpdateDarkMode(ctx);

    return (
      <Login
        {...args}
        /** don't focus on docs page since it causes issues */
        isFocused={ctx.viewMode === 'docs' ? false : args.isFocused}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const SocialLoginsBelow: Story = {
  args: {},
  render: LoginWithChildren,
};

export const SocialLoginsAbove: Story = {
  args: { childrenPosition: 'top' },
  render: LoginWithChildren,
};

export const CustomFields: Story = {
  args: {
    customFields: loginFields,
    customSchema: loginSchema,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        [
          <>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(loginFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>customSchema prop:</span>
            <pre>
              <code>{`z.object({
  department: z
    .string()
    .min(1, { message: 'Please select your department' })
    .max(50, { message: 'Department name is too long' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(1, { message: 'Please enter a password' })
    .min(8)
    .max(56),
  remember_me: z.boolean().default(true),
});
          `}</code>
            </pre>
          </>,
        ],
        'div',
      ),
    ],
  },
  render: (args, { globals: { scheme } }) => (
    <Login {...args} darkMode={scheme === 'dark mode'} />
  ),
};

export const CustomHeader: Story = {
  args: {
    buttonText: 'Next',
    header: () => (
      <>
        <h2>Sign in</h2>
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
        success ? 'test@test.com' : 'non@user.com',
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
        'If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.',
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
          <Login {...args} />
        </Modal>
      </div>
    );
  },
};
