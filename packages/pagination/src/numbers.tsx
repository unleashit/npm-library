import React, { memo } from 'react';
import { Ellipsis } from './Icons';
import { ClickHandlerEvent } from './pagination';

type NumbersProps = {
  total: number;
  currentOffset: number;
  containerWidth: number;
  perPage: number;
  clickHandler: (type: ClickHandlerEvent, pageNumber?: number) => void;
  clsName: (title: string) => string;
};

const Numbers = ({
  total,
  currentOffset,
  containerWidth,
  perPage,
  clickHandler,
  clsName,
}: NumbersProps): JSX.Element | null => {
  const pages = Math.ceil(total / perPage);
  const currentPage = Math.floor(currentOffset / perPage) + 1;

  let maxPages;
  if (containerWidth <= 1000) {
    const [_, breakPointPages]: any = [
      [450, 2],
      [550, 3],
      [650, 4],
      [850, 8],
      [1000, 10],
    ].find((group) => containerWidth < group[0]);
    maxPages = breakPointPages;
  } else {
    maxPages = Math.ceil(containerWidth / 80);
  }

  let pageAry: Array<number | null> = new Array(pages)
    .fill(undefined)
    .map((_, i) => i + 1);

  if (pages > maxPages) {
    if (currentPage > 1 && currentPage < pages) {
      pageAry = pageAry.slice(
        currentPage - 1,
        currentPage - 1 + (maxPages - 1),
      );
      if (pageAry[pageAry.length - 1] === pages) pageAry.pop();
      pageAry.unshift(1, null);
      pageAry.push(null, pages);
    } else if (currentPage === 1) {
      pageAry = pageAry.slice(0, maxPages);
      pageAry.push(null, pages);
    } else if (currentPage === pages) {
      pageAry = pageAry.slice(-maxPages);
      pageAry.unshift(1, null);
    }
  }

  if (pages <= 1) return null;

  return (
    <>
      {pageAry.map((page, i) =>
        !page ? (
          <div key={`${i}-ellipsis`} className={clsName('ellipsis')}>
            <Ellipsis fill="#ffffff" />
          </div>
        ) : (
          <button
            type="button"
            key={`${page}-pagination`}
            // className={`${theme.number} unl-pagination__number${
            //   page === currentPage ? ' unl-pagination__number--active' : ''
            // }`}
            className={`${clsName('number')}${
              page === currentPage ? ` ${clsName('number--active')}` : ''
            }`}
            onClick={() => clickHandler('page', page)}
          >
            {page}
          </button>
        ),
      )}
    </>
  );
};

export default memo(Numbers);
