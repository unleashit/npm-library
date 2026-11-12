import { useUpdateDarkMode } from '../hooks/useUpdateDarkMode.ts';
import { Decorator } from '@storybook/react-vite';

export const WithDarkModeStoryDecorator: Decorator = (story, ctx) => {
  useUpdateDarkMode(ctx);
  return story();
};
