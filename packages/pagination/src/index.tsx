import * as React from 'react';
import { throttle } from 'lodash';
import ChevronRight from './icons/chevron-right.svg';
import ChevronLeft from './icons/chevron-left.svg';
import * as style from './scss/pagination.scss';

interface Props {
  currentOffset: number;
  perPage: number;
  paginationHandler: (newOffset: number) => any;
  total: number;
  prevLabel: string;
  nextLabel: string;
}

interface State {
  containerWidth: number;
}

class Pagination extends React.Component<Props, State> {
  static defaultProps = {
    perPage: 10,
    prevLabel: 'prev',
    nextLabel: 'next',
  };

  private containerRef = React.createRef<HTMLDivElement>();

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

  clickHandler(type: string, pageNumber: number = 1): void | undefined {
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
    const { currentOffset, perPage, prevLabel } = this.props;

    return currentOffset - perPage >= 0 ? (
      <button
        type="button"
        className={`pagination__prev ${style.prev}`}
        onClick={() => this.clickHandler('prev')}
      >
        <ChevronLeft className={style.chevronLeft} /> {prevLabel}
      </button>
    ) : null;
  }

  next(): JSX.Element | null {
    const { currentOffset, perPage, total, nextLabel } = this.props;

    return currentOffset + perPage < total ? (
      <button
        type="button"
        className={`pagination__next ${style.next}`}
        onClick={() => this.clickHandler('next')}
      >
        {nextLabel} <ChevronRight className={style.chevronRight} />
      </button>
    ) : null;
  }

  numbers(): JSX.Element[] | null {
    const { total, perPage, currentOffset } = this.props;
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
      ].find(group => containerWidth < group[0]);
      maxPages = breakPointPages;
    } else {
      maxPages = Math.ceil(containerWidth / 80);
    }

    let pageAry: (number | null)[] = new Array(pages)
      .fill(undefined)
      .map((_, i) => i + 1);

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
      ? pageAry.map((page) =>
          !page ? (
            <span
              key={`${page}-ellipsis`}
              className={`pagination__ellipsis ${style.ellipsis}`}
            >
              ...
            </span>
          ) : (
            <button
              type="button"
              key={`${page}-pagination`}
              className={`pagination__number ${style.number}${
                page === currentPage ? ' active' : ''
              }`}
              onClick={() => this.clickHandler('page', page)}
            >
              {page}
            </button>
          ),
        )
      : null;
  }

  render(): JSX.Element | null {
    const { total, perPage } = this.props;

    return total > perPage ? (
      <div
        className={`pagination__container ${style.paginationContainer}`}
        ref={this.containerRef}
      >
        <div className={`pagination__inner ${style.pagination}`}>
          {this.prev()}
          {this.numbers()}
          {this.next()}
        </div>
      </div>
    ) : null;
  }
}

export default Pagination;
