import * as React from 'react';

/**
 * handle ESC key for a UI element
 * adds keyup listener that calls supplied callback
 */

export function useHandleEscapeKey(active: boolean, callback: () => void): void {
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent): void => {
      if (active && e.key === 'Escape') callback();
    };

    document.addEventListener('keyup', handleEscKey, false);

    return () => {
      document.removeEventListener('keyup', handleEscKey, false);
    };
  }, [active, callback]);
}
