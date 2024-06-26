import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import QuickForm, {
  FormValues,
  ServerResponse,
  defaultContactFields,
} from '@unleashit/quick-form';
import { Modal } from '@unleashit/modal';
import { formComponentNotes } from '../../lib/baseNotes.tsx';
import { useUpdateDarkMode } from '../../lib/hooks/useUpdateDarkMode.ts';
import {
  qfRecipeFields,
  qfRecipeSchema,
  qfSurveyFields,
  qfSurveySchema,
} from './customFields/quickFormFields.ts';
import { backendDemoHandler } from '../../lib/backendDemoHandler.ts';
import '@unleashit/quick-form/dist/quick-form.css';
import '@unleashit/modal/dist/modal.css';
import { makeNotes } from '../../lib/Notes.tsx';

const meta = {
  title: 'forms/Quick Form',
  component: QuickForm,
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
      },
    },
    footer: {
      table: {
        type: { summary: 'ComponentType | ReactNode' },
      },
    },
    loader: {
      table: {
        defaultValue: { summary: 'Default Spinner' },
      },
    },
    customFields: {
      table: {
        defaultValue: {
          summary: 'Default Fields',
          detail: JSON.stringify(defaultContactFields, null, 2),
        },
      },
    },
    customSchema: {
      table: {
        type: { summary: 'AnyZodSchema' },
        defaultValue: { summary: 'Default Zod Schema' },
      },
    },
    successMessageTimeout: {
      table: {
        type: { summary: 'number | false' },
      },
    },
  },
  args: {
    handler: backendDemoHandler<FormValues, ServerResponse>({
      route: '/quickform',
    }),
    onSuccess: (resp: ServerResponse) => {
      action('onSuccess')(resp);
    },
  },
  parameters: {
    notes: [
      formComponentNotes,
      ...makeNotes(
        <>
          To test the UI for a server side validation, include the word{' '}
          <b>dinosaur</b> somewhere in the message. This will pass client
          validation, but the server will respond with an error, which will then
          display in the form.
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
      <QuickForm
        {...args}
        /** don't focus on docs page since it causes issues */
        isFocused={ctx.viewMode === 'docs' ? false : args.isFocused}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof QuickForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contact: Story = {
  args: {},
};

export const Survey: Story = {
  args: {
    handler: backendDemoHandler({ route: '/quickform?type=survey' }),
    customFields: qfSurveyFields,
    customSchema: qfSurveySchema,
    buttonText: 'Submit',
    header: (
      <>
        <h3>Survey</h3>
        <p>Take our survey and you'll make our day!</p>
      </>
    ),
    successMessage: () => (
      <div className="success-message">
        <p>Thanks for taking the survey.</p>
        <p>
          This message has been set by the <i>successMessage</i> prop. When{' '}
          <i>successMessage</i> isn't provided or is set to false, be sure to
          provide an <i>onSuccess</i> prop with a redirect or other behavior.
        </p>
      </div>
    ),
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        [
          <>
            <span>
              <code>customFields</code> prop:
            </span>
            <pre>
              <code>{JSON.stringify(qfSurveyFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>
              <code>customSchema</code> prop:
            </span>
            <pre>
              <code>{`z.object({
  first_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  last_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  favorite_author: z.string().nonempty({ message: 'Please select an author' }),
  timezone: z.boolean(),
  chocolate: z.boolean(),
  feel: z.string().nonempty({ message: 'How do you feel?' }).max(50),
})`}</code>
            </pre>
          </>,
        ],
        'div',
      ),
    ],
  },
};

export const SubmitRecipe: Story = {
  args: {
    handler: backendDemoHandler({ route: '/quickform?type=recipe' }),
    customFields: qfRecipeFields,
    customSchema: qfRecipeSchema,
    buttonText: 'Submit',
    header: () => (
      <>
        <h3>Submit your Recipe</h3>
        <p>Send us a sample of your best cookin'!</p>
      </>
    ),
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
              <code>{JSON.stringify(qfRecipeFields, null, 2)}</code>
            </pre>
          </>,
          <>
            <span>
              <code>customSchema</code> prop:
            </span>
            <pre>
              <code>{`z.object({
  title: z
    .string()
    .min(1, { message: 'Please enter a title' })
    .min(5, { message: 'Title is too short' })
    .max(50, { message: 'Title is too long' })
    .default(''),
  category: z.string().nonempty({ message: 'Please select a category' }),
  description: z
    .string()
    .min(10, { message: 'Description is too short' })
    .max(500, { message: 'Description is too long' })
    .default(''),
  ingredients: z
    .string()
    .min(10, { message: 'Ingredients is too short' })
    .max(800, { message: 'Ingredients is too long' })
    .default(''),
  instructions: z
    .string()
    .min(10, { message: 'Preparation instructions is too short' })
    .max(800, { message: 'Preparation instructions is too long' })
    .default(''),
});`}</code>
            </pre>
          </>,
        ],
        'div',
      ),
    ],
  },
};

const SubmitPlay: (success?: boolean) => Story['play'] =
  (success = true) =>
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Fill out form', async () => {
      const nameInput = canvas.getByLabelText('Name', {
        selector: 'input',
      });

      await userEvent.type(nameInput, 'John Doe', {
        delay: 150,
      });

      const emailInput = canvas.getByLabelText('Email', {
        selector: 'input',
      });

      await userEvent.type(emailInput, 'example@example.com', {
        delay: 150,
      });

      const messageInput = canvas.getByLabelText('Message', {
        selector: 'textarea',
      });

      const message = success
        ? "Just wanted to let you that I'm really enjoying working with your " +
          'React components. Please let me know where I can contribute and submit ' +
          'some PRs. Cheers!'
        : 'I would like to buy 4 tickets to the dinosaur exhibit next Saturday. Thank you.';

      await userEvent.type(messageInput, message, {
        delay: 35,
      });
    });

    await step('Submit form', async () => {
      await fireEvent.click(canvas.getByRole('button'));
    });
  };

export const ValidSubmission: Story = {
  args: {
    isFocused: false,
  },
  play: SubmitPlay(),
};

export const InvalidSubmission: Story = {
  args: {
    isFocused: false,
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
        <>
          If you prefer not to show the system message to the user if the
          handler catches, you can customize it with a <code>failMsg</code>{' '}
          prop.
        </>,
      ),
    ],
  },
};

export const InAModal: Story = {
  args: {},
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
          <QuickForm {...args} />
        </Modal>
      </div>
    );
  },
};
