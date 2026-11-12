import { useArgs } from 'storybook/preview-api';
import { Decorator } from '@storybook/react-vite';

export const WithUseArgsDecorator: Decorator = (Story, ctx) => {
  const [, updateArgs] = useArgs();

  return Story({ ...ctx, updateArgs });
};
