import { useLayoutEffect, useState } from 'react';
import { StoryContext, StoryFn } from '@storybook/react';

/**
 * Decorator checks for a parameter named `query` and if found
 * updates the query string of the main url with its key/value pairs
 */
export const WithParamsDecorator = (Story: StoryFn, context: StoryContext) => {
  const [, forceRerender] = useState({});
  const query = context?.parameters?.query;

  useLayoutEffect(() => {
    const href = parent.window?.location?.href;

    if (!query || !href) return;

    const url = new URL(href);

    for (const [key, value] of Object.entries(query)) {
      console.log({ key, value });
      url.searchParams.set(key, value as string);
    }

    parent.window.history.replaceState(
      parent.window.history.state,
      '',
      decodeURIComponent(url.href),
    );
    forceRerender({});

    return () => {
      // restore original url
      parent.window.history.replaceState(parent.window.history.state, '', href);
    };
  }, [query]);

  return <Story {...context} />;
};
