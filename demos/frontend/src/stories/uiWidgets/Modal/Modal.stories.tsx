import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@unleashit/modal';
import { makeFeaturedNotes, makeNotes } from '../../../lib/Notes.tsx';
import '@unleashit/modal/dist/modal.css';
import { WithUseArgsDecorator } from '../../../lib/decorators/WithUseArgsDecorator.tsx';
import { WithDarkModeStoryDecorator } from '../../../lib/decorators/WithDarkModeStoryDecorator.tsx';
import { WithMaxWidthDecorator } from '../../../lib/decorators/WithMaxWidthDecorator.tsx';

const ModalContent = ({ toggleModal }: { toggleModal: () => void }) => (
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam
      praesentium quisquam repudiandae impedit architecto sapiente consequatur
      voluptate vitae quis?
    </p>
    <p>
      Pariatur ad fuga fugiat. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Distinctio dolores harum hic illum ipsa magnam officiis
      quia quibusdam recusandae, sed?
    </p>
    <div>
      <button className="story-button" type="button" onClick={toggleModal}>
        OK
      </button>
    </div>
  </>
);

const meta = {
  title: 'UI Widgets/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      table: {
        type: {
          summary:
            'small | medium | large | full | ${number}${(typeof cssUnits)[number]}',
        },
      },
    },
    header: {
      table: {
        type: { summary: 'React.FC<any> | string' },
      },
    },
    footer: {
      table: {
        type: { summary: 'React.FC<any> | string' },
      },
    },
    overlayColor: {
      table: {
        type: { summary: '{light: string, dark: string} | string | false' },
      },
    },
  },
  args: {
    isOpen: false,
    onClose: () => {},
  },
  parameters: {
    notes: makeFeaturedNotes([
      <>
        The <code>isOpen</code> prop determines the modal state. An{' '}
        <code>onClose</code> handler should also be provided to set the{' '}
        <code>isOpen</code>
        state.
      </>,
    ]),
    docs: { disable: true },
  },
  decorators: [
    WithUseArgsDecorator,
    WithDarkModeStoryDecorator,
    WithMaxWidthDecorator,
  ],
  render: (args, ctx) => {
    const toggleModal = () => ctx.updateArgs({ isOpen: !args.isOpen });

    return (
      <>
        <p className="theme-aware-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          numquam praesentium quisquam repudiandae impedit architecto sapiente
          consequatur voluptate vitae quis? Pariatur ad fuga fugiat, nostrum
          ipsa officia eveniet debitis ipsum assumenda labore maiores aspernatur
          soluta mollitia fugit itaque.
        </p>
        <div>
          <button className="story-button" type="button" onClick={toggleModal}>
            Open modal
          </button>
        </div>
        <Modal
          {...args}
          {...(ctx.viewMode === 'docs'
            ? { darkMode: ctx.globals.scheme === 'dark mode' }
            : {})}
          onClose={() => ctx.updateArgs({ isOpen: false })}
        >
          <ModalContent toggleModal={toggleModal} />
        </Modal>
      </>
    );
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([<>Basic example with defaults and no header or footer.</>]),
    ],
  },
};

export const HeaderAndFooter: Story = {
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([<>This example has a header and footer.</>]),
    ],
  },
};

export const Styled: Story = {
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>,
    cssVars: {
      lightModeBackgroundColor: '#029cfd',
      lightModeHeaderColor: '#ccc',
      lightModeBorderColor: 'transparent',
      darkModeBackgroundColor: '#029cfd',
      darkModeHeaderColor: '#555',
      darkModeBorderColor: 'transparent',
    },
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([
        <>
          With some theming customization using the <code>cssVars</code> prop.
        </>,
      ]),
    ],
  },
};

export const NoOverlay: Story = {
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>,
    overlayColor: 'transparent',
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([<>With a transparent overlay.</>]),
    ],
  },
};
