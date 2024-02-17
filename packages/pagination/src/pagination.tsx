import { CSSVars, mapCSSVarsToStyles, utils } from '@unleashit/common';
import throttle from 'lodash/throttle';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NextBtn, PrevBtn } from './nextPrevBtns';
import Numbers from './numbers';

// mdx_pagination_handler_start
export type PaginationHandler = (newOffset: number) => void;
// mdx_pagination_handler_end

// mdx_pagination_props_start
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
// mdx_pagination_props_end

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
      let effectiveWidth = 0;
      if (containerRef.current) {
        const container = window.getComputedStyle(containerRef.current);
        const totalWidth = Number(
          container.getPropertyValue('width').replace(/px$/, ''),
        );

        // subtract padding plus a buffer to account for smaller overall space
        // when padding is introduced
        const leftPad =
          Number(
            container.getPropertyValue('padding-left').replace(/px$/, ''),
          ) * 2;
        const rightPad =
          Number(
            container.getPropertyValue('padding-right').replace(/px$/, ''),
          ) * 2;
        effectiveWidth = totalWidth - leftPad - rightPad;
      }
      setContainerWidth(effectiveWidth);
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
