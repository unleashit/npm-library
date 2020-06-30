import * as React from 'react';

/**
 *
 * toggle a style attribute on the <body> tag based on boolean
 * cache the old attribute if it exists
 * remove the attr or replace with original if it existed on toggle or unmount
 *
 */

export const useToggleBodyStyleProp = (
  prop: string,
  valToSet: string,
  condition: boolean,
) => {
  const { current: bodyStyle }: React.RefObject<CSSStyleDeclaration> = React.useRef(
    document.body.style,
  );
  const cachedBodyStyle: React.MutableRefObject<string> = React.useRef('');

  const returnCachedStyleState = React.useCallback((): void => {
    bodyStyle[prop as any] = cachedBodyStyle.current;

    // clean up the style tag if there are no styles
    if (!bodyStyle.length) document.body.removeAttribute('style');
  }, [bodyStyle, prop]);

  // run only on mount/unmount
  React.useLayoutEffect(() => {
    // cache pre-existing style prop on <body> if it exists
    cachedBodyStyle.current = bodyStyle[prop as any] || '';

    return () => {
      // on unmounting, reapply pre-existing style if it existed
      returnCachedStyleState();
    };
  }, [bodyStyle, prop, returnCachedStyleState]);

  // run each time condition changes
  React.useLayoutEffect(() => {
    if (condition) {
      bodyStyle[prop as any] = valToSet;
    } else {
      returnCachedStyleState();
    }
  }, [bodyStyle, condition, prop, returnCachedStyleState, valToSet]);
};
