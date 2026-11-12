import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook 10 dropped `addon-essentials`, `addon-actions` and
 * `addon-interactions`: docs is a standalone addon while actions/interactions
 * ship with the manager (import them from `storybook/actions`).
 *
 * Absolute path resolution (only needed for Yarn PnP) is unnecessary under pnpm.
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
