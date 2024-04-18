import type { Meta, StoryObj } from '@storybook/react';
import Navigation, { NavigationLink } from '@unleashit/navigation';
import { useUpdateDarkMode } from '../../../lib/hooks/useUpdateDarkMode.ts';
import '@unleashit/navigation/dist/navigation.css';
import './navigation.storybook.css';
import { makeFeaturedNotes, makeNotes } from '../../../lib/Notes.tsx';

const links: NavigationLink[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'https://img.icons8.com/material/420/home-page.png',
    // iconPosition: 'right',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'About',
    href: '/about',
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const meta = {
  title: 'UI Widgets/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    linkComponent: {
      table: {
        defaultValue: null,
      },
    },
    template: {
      table: {
        type: { summary: 'clean | light-buttons | dark-buttons | none' },
      },
    },
    direction: {
      table: {
        type: { summary: 'horizontal | horz | vertical | vert' },
      },
    },
  },
  args: {
    links,
  },
  parameters: {
    notes: makeFeaturedNotes([
      <>
        Navigation links are configured as a javascript object via the{' '}
        <code>links</code> prop.
      </>,
      <>
        The optional auth sidecar can be customized with an{' '}
        <code>authLinks</code> prop. Or for quick prototypes, you may simply
        provide a boolean value via the <code>isAuth</code> prop.
      </>,
      <>
        If both <code>isAuth</code> and <code>authLinks</code> are absent, the
        auth sidecar won't appear.
      </>,
    ]),
  },
  render: (args, ctx) => {
    useUpdateDarkMode(ctx);

    return (
      <Navigation
        {...args}
        {...(ctx.viewMode === 'docs'
          ? { darkMode: ctx.globals.scheme === 'dark mode' }
          : {})}
      />
    );
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CleanTemplate: Story = {
  args: {},
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>clean</b> (default) template, no auth sidecar
        </>,
      ),
    ],
  },
};

export const LightButtonsTemplate: Story = {
  args: {
    template: 'light-buttons',
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>light-buttons</b> template, no auth sidecar
        </>,
      ),
    ],
  },
};

export const DarkButtonsTemplate: Story = {
  args: {
    template: 'dark-buttons',
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>dark-buttons</b> template, no auth sidecar
        </>,
      ),
    ],
  },
};

export const CleanLoggedOut: Story = {
  args: {
    isAuth: false,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>clean</b> template with auth sidecar (logged out)
        </>,
      ),
    ],
  },
};

export const CleanLoggedIn: Story = {
  args: {
    isAuth: true,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>clean</b> template with auth sidecar (logged in)
        </>,
      ),
    ],
  },
};

export const LightButtonsLoggedOut: Story = {
  args: {
    template: 'light-buttons',
    isAuth: false,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>light-buttons</b> template with auth sidecar (logged out)
        </>,
      ),
    ],
  },
};

export const LightButtonsLoggedIn: Story = {
  args: {
    template: 'light-buttons',
    isAuth: true,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>light-buttons</b> template with auth sidecar (logged in)
        </>,
      ),
    ],
  },
};

export const DarkButtonsLoggedOut: Story = {
  args: {
    template: 'dark-buttons',
    isAuth: false,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>dark-buttons</b> template with auth sidecar (logged out)
        </>,
      ),
    ],
  },
};

export const DarkButtonsLoggedIn: Story = {
  args: {
    template: 'dark-buttons',
    isAuth: true,
    classes: ['unl-navigation__container--wide'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>dark-buttons</b> template with auth sidecar (logged in)
        </>,
      ),
    ],
  },
};

export const LightButtonsVertical: Story = {
  args: {
    template: 'light-buttons',
    direction: 'vertical',
    isAuth: false,
    classes: ['unl-navigation__container--narrow'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>light-buttons</b> template with <b>direction</b> prop set to{' '}
          <b>vertical</b> and <b>isAuth</b> set to true
        </>,
      ),
    ],
  },
};

export const DarkButtonsVertical: Story = {
  args: {
    template: 'dark-buttons',
    direction: 'vertical',
    isAuth: false,
    classes: ['unl-navigation__container--narrow'],
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          <b>dark-buttons</b> template with <b>direction</b> prop set to{' '}
          <b>vertical</b> and <b>isAuth</b> set to true
        </>,
      ),
    ],
  },
};

export const PlainTemplate: Story = {
  args: {
    template: 'none',
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes(
        <>
          Plain template, default CSS is ignored. Useful in the case of
          importing classic CSS but wish to have a version of the component with
          a custom theme that won't clash with the default CSS. Note that if you
          use CSS modules and/or never import the default CSS globally, you
          won't need this.
        </>,
      ),
    ],
  },
};
