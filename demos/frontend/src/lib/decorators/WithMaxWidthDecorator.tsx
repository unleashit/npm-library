import { Decorator } from '@storybook/react';

/** Smaller max-width layout for stories */
export const WithMaxWidthDecorator: Decorator = (Story) => {
  return (
    <div className="max-width-container">
      <Story />
    </div>
  );
};
