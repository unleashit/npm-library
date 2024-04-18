import { useEffect, useRef } from 'react';
import { StoryContext } from '@storybook/react';
import { useArgs, useGlobals } from '@storybook/preview-api';

/**
 * Keeps darkMode controls and the global scheme param in sync
 */
export const useUpdateDarkMode = ({
  viewMode,
  globals: { scheme },
  args: { darkMode },
  // eslint-disable-next-line
}: StoryContext<any>) => {
  const [, updateArgs, resetArgs] = useArgs();
  const [, updateGlobals] = useGlobals();

  const darkModeRef = useRef<boolean>(darkMode);
  const schemeRef = useRef<string>(scheme);

  useEffect(() => {
    const schemeChanged = scheme !== schemeRef.current;
    const darkModeChanged = darkMode !== darkModeRef.current;
    darkModeChanged && (darkModeRef.current = darkMode);
    schemeChanged && (schemeRef.current = scheme);

    // Ignore when in docs mode. Docs mode causing too many rerenders
    // and bugs. In docs mode, darkMode arg is set according to global
    // scheme param, but caveat is dark mode control gets ignored.
    if (viewMode === 'docs') {
      return;
    }

    // sync darkMode control with global scheme
    if (scheme === 'dark mode' && !darkMode) {
      updateArgs({
        darkMode: true,
      });
    } else if (scheme === 'light mode' && darkMode) {
      resetArgs(['darkMode']);
    }

    // sync global scheme with darkMode control
    if (darkModeChanged && !schemeChanged) {
      updateGlobals({
        scheme: darkMode === true ? 'dark mode' : 'light mode',
      });
    }
  }, [viewMode, scheme, darkMode, updateArgs, updateGlobals, resetArgs]);
};
