import { useUpdateDarkMode } from '../hooks/useUpdateDarkMode.ts';
import { Decorator } from '@storybook/react';

export const WithDarkModeStoryDecorator: Decorator = (story, ctx) => {
  useUpdateDarkMode(ctx);
  return story();
};
