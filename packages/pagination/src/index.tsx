import { isCSSModule } from '@unleashit/common';
import throttle from 'lodash/throttle';
import * as React from 'react';

import { ChevronLeft, ChevronRight } from './Icons';

export type PaginationHandler = (newOffset: number) => void;

export interface PaginationProps {
  currentOffset: number;
  perPage: number;
  paginationHandler: PaginationHandler;
  total: number;
  prevLabel: string;
  nextLabel: string;
  cssModule?: { [key: string]: string };
}

interface State {
  containerWidth: number;
}

class Pagination extends React.Component<PaginationProps, State> {
  static defaultProps = {
    perPage: 10,
    prevLabel: 'prev',
    nextLabel: 'next',
  };

  containerRef = React.createRef<HTMLDivElement>();

  boundSetContainerWidth = throttle(this.setContainerWidth.bind(this), 500);

  state = {
    containerWidth: 0,
  };

  componentDidMount(): void {
    this.setContainerWidth();
    window.addEventListener('resize', this.boundSetContainerWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.boundSetContainerWidth);
  }

  setContainerWidth(): void {
    const containerWidth = this.containerRef.current
      ? this.containerRef.current.offsetWidth
      : 0;
    this.setState({ containerWidth });
  }

  clickHandler(type: string, pageNumber = 1): void | undefined {
    const { currentOffset, total, perPage, paginationHandler } = this.props;
    let newOffset;

    switch (type) {
      case 'next':
        newOffset = currentOffset + perPage;
        if (newOffset > total) return;
        paginationHandler(newOffset);
        break;
      case 'prev':
        newOffset = currentOffset - perPage;
        if (newOffset < 0) return;
        paginationHandler(newOffset);
        break;
      case 'page':
        newOffset = (pageNumber - 1) * perPage;
        if (newOffset === currentOffset || newOffset > total || newOffset < 0) return;
        paginationHandler(newOffset);
        break;
      default:
        throw new TypeError(
          'Must supply pagination an argument of "prev", "next", or "page"',
        );
    }
  }

  prev(): JSX.Element | null {
    const { currentOffset, perPage, prevLabel, cssModule: theme = {} } = this.props;

    return currentOffset - perPage >= 0 ? (
      <button
        type="button"
        className={isCSSModule(theme.prev, `unl-pagination__prev`)}
        onClick={(): void => this.clickHandler('prev')}
      >
        <ChevronLeft
          className={isCSSModule(theme.chevronLeft, 'unl-pagination__chevron-left')}
        />{' '}
        {prevLabel}
      </button>
    ) : null;
  }

  next(): JSX.Element | null {
    const {
      currentOffset,
      perPage,
      total,
      nextLabel,
      cssModule: theme = {},
    } = this.props;

    return currentOffset + perPage < total ? (
      <button
        type="button"
        className={isCSSModule(theme.next, 'unl-pagination__next')}
        onClick={(): void => this.clickHandler('next')}
      >
        {nextLabel}{' '}
        <ChevronRight
          className={isCSSModule(theme.chevronRight, 'unl-pagination__chevron-right')}
        />
      </button>
    ) : null;
  }

  numbers(): JSX.Element[] | null {
    const { total, perPage, currentOffset, cssModule: theme = {} } = this.props;
    const { containerWidth } = this.state;

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
      ].find((group): boolean => containerWidth < group[0]);
      maxPages = breakPointPages;
    } else {
      maxPages = Math.ceil(containerWidth / 80);
    }

    let pageAry: (number | null)[] = new Array(pages)
      .fill(undefined)
      .map((_, i): number => i + 1);

    if (pages > maxPages) {
      if (currentPage > 1 && currentPage < pages) {
        pageAry = pageAry.slice(currentPage - 1, currentPage - 1 + (maxPages - 1));
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

    return pages > 1
      ? pageAry.map(
          (page, i): React.ReactElement =>
            !page ? (
              <span
                key={`${i}-ellipsis`}
                className={isCSSModule(theme.ellipsis, `unl-pagination__ellipsis`)}
              >
                ...
              </span>
            ) : (
              <button
                type="button"
                key={`${page}-pagination`}
                className={`${isCSSModule(theme.number, 'unl-pagination__number')}${
                  page === currentPage ? ' unl-pagination__number--active' : ''
                }`}
                onClick={(): void => this.clickHandler('page', page)}
              >
                {page}
              </button>
            ),
        )
      : null;
  }

  render(): JSX.Element | null {
    const { total, perPage, cssModule: theme = {} } = this.props;

    return total > perPage ? (
      <div
        className={isCSSModule(theme.paginationContainer, `unl-pagination__container`)}
        ref={this.containerRef}
      >
        <div className={isCSSModule(theme.paginationInner, `unl-pagination__inner`)}>
          {this.prev()}
          {this.numbers()}
          {this.next()}
        </div>
      </div>
    ) : null;
  }
}

export default Pagination;
