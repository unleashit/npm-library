import type { Preview } from '@storybook/react';
import '../src/global.css';
// @ts-ignore
import WithDarkModeGlobalDecorator from '../src/lib/decorators/WithDarkModeGlobalDecorator';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Home',
          'forms',
          [
            'Login',
            'Signup',
            'Forgot Password',
            'Forgot Password Reset',
            'Quick Form',
            '*',
          ],
          'UI Widgets',
          'other',
          ['Recursive Data Lister', 'AsyncHandler', '*'],
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // remove background changer and grid buttons from toolbar
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    docs: {
      // supposed to default code previews to open, but not working...
      // source: {
      //   state: 'open',
      // },
      // source: {
      //   excludeDecorators: true,
      // },
      toc: true,
    },
    layout: 'fullscreen',
  },

  globalTypes: {
    scheme: {
      name: 'scheme',
      description: 'Select light or dark mode',
      defaultValue: 'light mode',
      toolbar: {
        icon: 'mirror',
        items: ['light mode', 'dark mode'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [WithDarkModeGlobalDecorator],
};

export default preview;
