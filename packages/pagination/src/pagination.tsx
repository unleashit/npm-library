import { CSSVars, mapCSSVarsToStyles, utils } from '@unleashit/common';
import throttle from 'lodash/throttle';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NextBtn, PrevBtn } from './nextPrevBtns';
import Numbers from './numbers';

export type PaginationHandler = (newOffset: number) => void;

export interface PaginationProps {
  currentOffset: number;
  handler: PaginationHandler;
  total: number;
  perPage?: number;
  prevLabel?: string;
  nextLabel?: string;
  darkMode?: boolean;
  cssVars?: CSSVars<typeof varNames>;
  cssModule?: Record<string, string>;
}

export type ClickHandlerEvent = 'next' | 'prev' | 'page';

const { genClassNames } = utils;

const varNames = [
  'lightModeText',
  'lightModeContainerPadding',
  'lightModeBackgroundColor',
  'lightModePageNumberBackground',
  'lightModePageNumberBackgroundActive',
  'lightModePageNumberBackgroundHover',
  'darkModeText',
  'darkModeContainerPadding',
  'darkModeBackgroundColor',
  'darkModePageNumberBackground',
  'darkModePageNumberBackgroundActive',
  'darkModePageNumberBackgroundHover',
] as const;

const Pagination = ({
  perPage = 10,
  prevLabel = 'prev',
  nextLabel = 'next',
  currentOffset,
  total,
  handler,
  darkMode = false,
  cssVars,
  cssModule = {},
}: PaginationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const setWidth = throttle(() => {
      const width = containerRef.current ? containerRef.current.offsetWidth : 0;
      setContainerWidth(width);
    }, 500);

    setWidth();
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  const clickHandler = useCallback(
    (type: ClickHandlerEvent, pageNumber = 1) => {
      let newOffset;

      switch (type) {
        case 'next':
          newOffset = currentOffset + perPage;
          if (newOffset > total) return;
          handler(newOffset);
          break;
        case 'prev':
          newOffset = currentOffset - perPage;
          if (newOffset < 0) return;
          handler(newOffset);
          break;
        case 'page':
          newOffset = (pageNumber - 1) * perPage;
          if (newOffset === currentOffset || newOffset > total || newOffset < 0)
            return;
          handler(newOffset);
          break;
        default:
          throw new TypeError(
            'Must supply pagination an argument of "prev", "next", or "page"',
          );
      }
    },
    [currentOffset, total, perPage, handler],
  );

  const { clsName } = React.useMemo(
    () => genClassNames(Pagination.displayName, cssModule),
    [cssModule],
  );

  return total > perPage ? (
    <div
      className={clsName('container')}
      ref={containerRef}
      data-theme={darkMode ? 'dark' : 'light'}
      style={mapCSSVarsToStyles<typeof varNames>({
        cssVars,
        varNames,
      })}
    >
      <div className={clsName('inner')}>
        <PrevBtn
          currentOffset={currentOffset}
          perPage={perPage}
          prevLabel={prevLabel}
          clickHandler={clickHandler}
          clsName={clsName}
        />
        <Numbers
          total={total}
          currentOffset={currentOffset}
          containerWidth={containerWidth}
          perPage={perPage}
          clickHandler={clickHandler}
          clsName={clsName}
        />
        <NextBtn
          total={total}
          currentOffset={currentOffset}
          perPage={perPage}
          nextLabel={nextLabel}
          clickHandler={clickHandler}
          clsName={clsName}
        />
      </div>
    </div>
  ) : null;
};

Pagination.displayName = 'Pagination';
export default Pagination;
