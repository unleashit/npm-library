import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import {
  ForgotPasswordReset,
  FormValuesReset,
  ServerResponseReset,
} from '@unleashit/forgot-password';
import { useUpdateDarkMode } from '../../lib/hooks/useUpdateDarkMode.ts';
import { formComponentNotes } from '../../lib/baseNotes.tsx';
import '@unleashit/forgot-password/dist/forgot-password.css';
import {
  forgotPasswordResetFields,
  forgotPasswordResetSchema,
} from './customFields/forgotPasswordFields.ts';
import { backendDemoHandler } from '../../lib/backendDemoHandler.ts';
import { WithParamsDecorator } from '../../lib/decorators/WithParamsDecorator.tsx';
import { makeNotes } from '../../lib/Notes.tsx';

const FPRwithChildren: Story['render'] = (args, ctx) => {
  useUpdateDarkMode(ctx);

  return (
    <ForgotPasswordReset
      {...args}
      isFocused={ctx.viewMode !== 'docs'}
      {...(ctx.viewMode === 'docs'
        ? { darkMode: ctx.globals.scheme === 'dark mode' }
        : {})}
    >
      <div style={{ margin: '2rem 0' }}>
        We recommend using a trusted password manager to generate a strong
        password.
      </div>
    </ForgotPasswordReset>
  );
};

const meta = {
  title: 'forms/Forgot Password Reset',
  component: ForgotPasswordReset,
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
        defaultValue: {
          summary: `<div><h2>Thank you.</h2><p>Your password has been updated. You may now login with the new password.</p></div>`,
        },
      },
    },
    // loginLink: {
    //   control: 'null',
    //   table: {
    //     type: { summary: 'ComponentType | ReactNode | false' },
    //   },
    // },
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
    handler: backendDemoHandler<FormValuesReset, ServerResponseReset>({
      route: (values) => {
        const params = new URL(parent.window.location.href).searchParams;
        // for the demo, the token is usually in the URL, but sometimes
        // it's in the form
        const token = values.token ? values.token : params.get('token');
        const userid = params.get('userid');

        return `/forgot-password/${userid}/${token}`;
      },
    }),
    onSuccess: (resp: ServerResponseReset) => {
      action('onSuccess')(resp);
    },
  },
  parameters: {
    query: {
      userid: '1',
    },
    notes: [
      formComponentNotes,
      ...makeNotes(
        <>
          In this example, in the <code>handler</code> function, the user Id and
          token are taken from url and posted to the server for verification. If
          the either the id or token don't match, or the user input is wrong it
          will fail.
        </>,
      ),
    ],
  },
  decorators: [
    // Wrapper to style forms components (centered, smaller max-width)
    (Story, context) => {
      return (
        <div className="max-width-container">
          <Story {...context} />
        </div>
      );
    },
    WithParamsDecorator,
  ],
  render: (args, ctx) => {
    useUpdateDarkMode(ctx);

    return (
      <ForgotPasswordReset
        {...args}
        /** don't focus on docs page since it causes issues */
        isFocused={ctx.viewMode === 'docs' ? false : args.isFocused}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof ForgotPasswordReset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  parameters: {
    query: {
      token: '1234567890',
    },
  },
};

export const ChildrenBelow: Story = {
  args: {},
  parameters: {
    query: {
      token: '1234567890',
    },
  },
  render: FPRwithChildren,
};

export const ChildrenAbove: Story = {
  args: { childrenPosition: 'top' },
  parameters: {
    query: {
      token: '1234567890',
    },
  },
  render: FPRwithChildren,
};

export const CustomFields: Story = {
  args: {
    customFields: forgotPasswordResetFields,
    customSchema: forgotPasswordResetSchema,
  },
  parameters: {
    notes: [
      formComponentNotes,
      ...makeNotes([
        <>
          In this example the user ID must still be present in the url, but a
          field was added to manually accept a token. If all is a match, the
          user can reset their password.
        </>,
        <>
          For demo purposes, you can use <strong>1234567890</strong> as the
          token to test a successful response. If not successful, ensure{' '}
          <strong>userid=1</strong> is part of the query string.
        </>,
      ]),
      ...makeNotes(
        [
          <>
            <span>
              <code>customFields</code> prop:
            </span>
            <pre>
              <code>{JSON.stringify(forgotPasswordResetFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>
              <code>customSchema</code> prop:
            </span>
            <pre>
              <code>{`z.object({
  token: z
    .string({ required_error: 'Please enter the token from the email we sent' })
    .nonempty({ message: 'Please enter the token from the email we sent' })
    .max(50, { message: 'Token is too long' })
    .default(''),
  newPassword: z
    .string({ required_error: 'New Password is required' })
    .nonempty({ message: 'New Password is required' })
    .max(56)
    .default(''),
  newPasswordConfirm: z
    .string({ required_error: 'Password confirmation is required' })
    .nonempty({ message: 'Password confirmation is required' })
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
        <h2>Reset Password</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
    ),
  },
  parameters: {
    query: {
      token: '1234567890',
    },
  },
};

const SubmitPlay: (success?: boolean) => Story['play'] =
  () =>
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter password', async () => {
      const password1Input = canvas.getByLabelText('New password', {
        selector: 'input',
      });

      await userEvent.type(password1Input, 'somepassword123', {
        delay: 150,
      });
      const password2Input = canvas.getByLabelText('Password confirm', {
        selector: 'input',
      });

      await userEvent.type(password2Input, 'somepassword123', {
        delay: 150,
      });
    });

    await step('Submit form', async () => {
      await fireEvent.click(canvas.getByRole('button'));
    });
  };

export const GoodCredentials: Story = {
  args: {},
  parameters: {
    query: {
      token: '1234567890',
    },
  },
  play: SubmitPlay(),
};

export const BadCredentials: Story = {
  args: {},
  parameters: {
    query: {
      token: 'badtoken',
    },
  },
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
    query: {
      token: '1234567890',
    },
  },
};
