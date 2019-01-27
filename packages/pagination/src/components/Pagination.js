import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import throttle from 'lodash/throttle';
import style from './scss/pagination.scss';
import ChevronLeft from './icons/chevron-left.svg';
import ChevronRight from './icons/chevron-right.svg';

export const isClient = typeof window !== 'undefined';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 500,
    };

    this.boundSetWindowWidth = throttle(this.setWindowWidth.bind(this), 500);
  }

  componentDidMount() {
    window.addEventListener('resize', this.boundSetWindowWidth);
    this.setWindowWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.boundSetWindowWidth);
  }

  setWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  clickHandler(type, pageNumber = 1) {
    const { currentOffset, currentPage, total, perPage, paginationHandler } = this.props;
    let newOffset;
    let newPage;

    switch (type) {
      case 'next':
        newOffset = currentOffset + perPage;
        newPage = currentPage + 1;

        if (newOffset > total) return false;

        // setSessionStorage('offset', newOffset);
        paginationHandler({ currentOffset: newOffset, currentPage: newPage });
        break;
      case 'prev':
        newOffset = currentOffset - perPage;
        newPage = currentPage - 1;

        if (newPage < 0) return false;

        // setSessionStorage('offset', newOffset);
        paginationHandler({ currentOffset: newOffset, currentPage: newPage });
        break;
      case 'page':
        newOffset = (pageNumber - 1) * perPage;
        newPage = pageNumber;

        if (newOffset > total) return false;

        // setSessionStorage('offset', newOffset);
        paginationHandler({
          currentOffset: newOffset,
          currentPage: newPage,
        });
        break;
      default:
        return undefined;
    }

    return new TypeError('Must supply pagination an argument of "prev", "next", or "page"');
  }

  prev() {
    const { currentOffset } = this.props;

    return currentOffset > 0
      ? <div className={style.prev} onClick={() => this.clickHandler('prev')}>
        <ChevronLeft className={style.chevronLeft} /> previous
      </div>
      : null;
  }

  next() {
    const { currentOffset, perPage, total } = this.props;

    return currentOffset + perPage < total
      ? <div className={style.next} onClick={() => this.clickHandler('next')} ref={'nextPag'}>
        next <ChevronRight className={style.chevronRight} />
      </div>
      : null;
  }

  numbers() {
    const { total, perPage, currentPage } = this.props;

    const pages = Math.ceil(total / perPage);
    const maxPages = [[450, 2], [550, 3], [650, 4], [850, 8], [1000, 10], [99999, 10]].find(
      group => this.state.windowWidth < group[0],
    )[1];

    let pageAry = new Array(pages).fill(undefined).map((val, i) => i + 1);

    if (pages > maxPages) {
      if (currentPage > 1 && currentPage < pages) {
        pageAry = pageAry.slice(currentPage - 1, currentPage - 1 + (maxPages - 1));
        if (pageAry[pageAry.length - 1] === pages) pageAry.pop();
        pageAry.unshift(1, '...');
        pageAry.push('...', pages);
      } else if (currentPage === 1) {
        pageAry = pageAry.slice(0, maxPages);
        pageAry.push('...', pages);
      } else if (currentPage === pages) {
        pageAry = pageAry.slice(-maxPages);
        pageAry.unshift(1, '...');
      }
    }

    return pages > 1
      ? pageAry.map(
        (n, i) =>
          (n === '...'
            ? <span key={`${i}-pag`} className={style.ellipsis}>...</span>
            : <span
              key={`${i}-pag`}
              className={classnames(style.number, { active: n === currentPage })}
              onClick={() => this.clickHandler('page', n)}
            >
                {n}
              </span>),
      )
      : null;
  }

  render() {
    const { total, perPage } = this.props;

    return total > perPage
      ? <div className={classnames(style.paginationContainer)}>
        <div className="container-fluid">
          <div className="row">
            <div
              ref={(el) => {
                this.containerRef = el;
              }}
              className={`col-md-12 ${style.pagination}`}
            >
              {this.prev()}
              {this.numbers()}
              {this.next()}
            </div>
          </div>
        </div>
      </div>
      : null;
  }
}

// Pagination.propTypes = {
//   currentOffset: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   perPage: PropTypes.number,
//   selectedCategory: PropTypes.string,
//   // categoryTotal: PropTypes.number,
// };

Pagination.defaultProps = {
  currentOffset: 0,
  currentPage: 1,
  total: 0,
  perPage: 10,
  selectedCategory: 'all',
  // categoryTotal: null,
};

export default Pagination;
