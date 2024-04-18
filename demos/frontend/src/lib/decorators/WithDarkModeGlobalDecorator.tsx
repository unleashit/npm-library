import { useEffect, useRef, ComponentType } from 'react';
import { StoryContext } from '@storybook/react';

/*
 * Global decorator applied in .storybook/preview.ts
 * Reads the context for the scheme parameter and updates
 * the data-theme attribute on the html element
 * */
function WithDarkModeGlobalDecorator(
  Story: ComponentType,
  context: StoryContext,
) {
  const htmlTag = useRef(document.documentElement);
  const { scheme } = context.globals;

  useEffect(() => {
    if (scheme === 'dark mode') {
      htmlTag.current.setAttribute('data-theme', 'storybook-dark');
    } else {
      htmlTag.current.setAttribute('data-theme', 'storybook-light');
    }
  }, [scheme]);

  return <Story />;
}

export default WithDarkModeGlobalDecorator;
