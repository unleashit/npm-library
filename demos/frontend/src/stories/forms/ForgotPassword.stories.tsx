import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import LinkTo from '@storybook/addon-links/react';
import {
  ForgotPassword,
  FormValues,
  ServerResponse,
} from '@unleashit/forgot-password';
import { useUpdateDarkMode } from '../../lib/hooks/useUpdateDarkMode.ts';
import {
  forgotPasswordFields,
  forgotPasswordSchema,
} from './customFields/forgotPasswordFields.ts';
import { formComponentNotes } from '../../lib/baseNotes.tsx';
import '@unleashit/forgot-password/dist/forgot-password.css';
import { backendDemoHandler } from '../../lib/backendDemoHandler.ts';
import { makeNotes } from '../../lib/Notes.tsx';

const FPwithChildren: Story['render'] = (args, ctx) => {
  useUpdateDarkMode(ctx);

  return (
    <ForgotPassword
      {...args}
      isFocused={ctx.viewMode !== 'docs'}
      {...(ctx.viewMode === 'docs'
        ? { darkMode: ctx.globals.scheme === 'dark mode' }
        : {})}
    >
      <div style={{ margin: '2rem 0' }}>
        If you're having trouble signing in, visit our <a href="#">support</a>{' '}
        or <a href="#">FAQ</a> pages.
      </div>
    </ForgotPassword>
  );
};

const meta = {
  title: 'forms/Forgot Password',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {
    header: {
      table: {
        type: { summary: 'ComponentType | ReactNode | false' },
        defaultValue: { summary: 'Default Header' },
      },
    },
    successMessage: {
      control: { disable: true },
      table: {
        type: { summary: 'ComponentType | string | false' },
        defaultValue: {
          summary: `<div><h2>Verification Email Sent</h2><p>Please check your inbox and click on the provided link. You will then be able to reset your password and login.</p></div>`,
        },
      },
    },
    loginLink: {
      control: { disable: true },
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
      route: '/forgot-password',
    }),
    onSuccess: (resp: ServerResponse) => {
      action('onSuccess')(resp);
    },
    loginLink: () => (
      <LinkTo name="basic" title="forms-login">
        Back to login
      </LinkTo>
    ),
  },
  parameters: {
    notes: [
      formComponentNotes,
      ...makeNotes([
        <>
          For demo purposes, any email except <b>non@user.com</b> will be
          considered a valid user. If you enter a valid email you have access
          to, you should get an message with a reset link (which will take you
          back here, to the <em>Forgot Password Reset</em> component).
        </>,
        <>
          For security reasons, it's generally recommended not to notify the
          user whether their email is found in the database. That said, the
          component can display that (or any) error your server returns or call
          in a toast if configured. For testing, you can use <b>non@user.com</b>{' '}
          to show the case where the backend responds with user not found.
        </>,
      ]),
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
      <ForgotPassword
        {...args}
        /** don't focus on docs page since it causes issues */
        isFocused={ctx.viewMode === 'docs' ? false : args.isFocused}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const ChildrenBelow: Story = {
  args: {},
  render: FPwithChildren,
};

export const ChildrenAbove: Story = {
  args: { childrenPosition: 'top' },
  render: FPwithChildren,
};

export const CustomFields: Story = {
  args: {
    customFields: forgotPasswordFields,
    customSchema: forgotPasswordSchema,
  },
  parameters: {
    notes: [
      ...meta.parameters.notes,
      ...makeNotes(
        [
          <>
            <span>
              <code>customFields</code> prop:
            </span>
            <pre>
              <code>{JSON.stringify(forgotPasswordFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>
              <code>customSchema</code> prop:
            </span>
            <pre>
              <code>{`z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  secret_question_1: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
  secret_question_2: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
})`}</code>
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
        <h2>Password Reset</h2>
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

    await step('Enter email', async () => {
      const emailInput = canvas.getByLabelText('Email', {
        selector: 'input',
      });

      await userEvent.type(
        emailInput,
        success ? 'example@example.com' : 'non@user.com',
        {
          delay: 150,
        },
      );
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
