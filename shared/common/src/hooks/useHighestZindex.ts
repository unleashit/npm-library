import * as React from 'react';

type HighestZindex = number | 'auto';

// searches the dom for highest z-index in use
// returns highest + 1 or 'auto' if none found
export function useHighestZindex(): HighestZindex {
  const [modalZindex, setModalZindex] = React.useState<HighestZindex>('auto');

  React.useLayoutEffect(() => {
    const tags = Array.from(document.querySelectorAll<HTMLElement>('body *'));

    const highestZindex = tags
      .reduce<number[]>((a, b) => {
        const zindex = parseFloat(window.getComputedStyle(b).zIndex);

        if (zindex && !Number.isNaN(b)) {
          a.push(zindex);
        }
        return a;
      }, [])
      .sort()
      .pop();

    const newZindex = typeof highestZindex === 'number' ? highestZindex + 1 : 'auto';

    setModalZindex(newZindex);
  }, []);

  return modalZindex;
}
