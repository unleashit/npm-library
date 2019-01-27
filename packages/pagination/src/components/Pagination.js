import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import throttle from "lodash/throttle";
import style from "./scss/pagination.scss";
import ChevronLeft from "./icons/chevron-left.svg";
import ChevronRight from "./icons/chevron-right.svg";

const isClient = typeof window !== "undefined";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 0
    };

    this.containerRef = React.createRef();
    this.boundSetContainerWidth = throttle(
      this.setContainerWidth.bind(this),
      500
    );
  }

  componentDidMount() {
    this.setContainerWidth();
    window.addEventListener("resize", this.boundSetContainerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.boundSetContainerWidth);
  }

  setContainerWidth() {
    this.setState({ containerWidth: this.containerRef.current.offsetWidth });
  }

  clickHandler(type, pageNumber = 1) {
    const { currentOffset, total, perPage, paginationHandler } = this.props;
    let newOffset;

    switch (type) {
      case "next":
        newOffset = currentOffset + perPage;
        if (newOffset > total) return false;
        paginationHandler(newOffset);
        break;
      case "prev":
        newOffset = currentOffset - perPage;
        if (newOffset < 0) return false;
        paginationHandler(newOffset);
        break;
      case "page":
        newOffset = (pageNumber - 1) * perPage;
        if (newOffset === currentOffset || newOffset > total || newOffset < 0)
          return false;
        paginationHandler(newOffset);
        break;
      default:
        return undefined;
    }

    return new TypeError(
      'Must supply pagination an argument of "prev", "next", or "page"'
    );
  }

  prev() {
    const { currentOffset, perPage } = this.props;

    return currentOffset - perPage >= 0 ? (
      <div className={style.prev} onClick={() => this.clickHandler("prev")}>
        <ChevronLeft className={style.chevronLeft} /> previous
      </div>
    ) : null;
  }

  next() {
    const { currentOffset, perPage, total } = this.props;

    return currentOffset + perPage < total ? (
      <div className={style.next} onClick={() => this.clickHandler("next")}>
        next <ChevronRight className={style.chevronRight} />
      </div>
    ) : null;
  }

  numbers() {
    const { total, perPage, currentOffset } = this.props;
    const { containerWidth } = this.state;
    console.log(containerWidth);

    const pages = Math.ceil(total / perPage);
    const currentPage = Math.floor(currentOffset / perPage) + 1;

    let maxPages;
    if (containerWidth <= 1000) {
      maxPages = [[450, 2], [550, 3], [650, 4], [850, 8], [1000, 10]].find(
        group => containerWidth < group[0]
      )[1];
    } else {
      maxPages = containerWidth / 80;
    }

    console.log("max pages: ", maxPages);
    let pageAry = new Array(pages).fill(undefined).map((_, i) => i + 1);

    if (pages > maxPages) {
      if (currentPage > 1 && currentPage < pages) {
        pageAry = pageAry.slice(
          currentPage - 1,
          currentPage - 1 + (maxPages - 1)
        );
        if (pageAry[pageAry.length - 1] === pages) pageAry.pop();
        pageAry.unshift(1, "...");
        pageAry.push("...", pages);
      } else if (currentPage === 1) {
        pageAry = pageAry.slice(0, maxPages);
        pageAry.push("...", pages);
      } else if (currentPage === pages) {
        pageAry = pageAry.slice(-maxPages);
        pageAry.unshift(1, "...");
      }
    }

    return pages > 1
      ? pageAry.map(
          (page, i) =>
            page === "..." ? (
              <span key={`${i}-ellipsis`} className={style.ellipsis}>
                ...
              </span>
            ) : (
              <span
                key={`${page}-pagination`}
                className={classnames(style.number, {
                  active: page === currentPage
                })}
                onClick={() => this.clickHandler("page", page)}
              >
                {page}
              </span>
            )
        )
      : null;
  }

  render() {
    const { total, perPage } = this.props;

    return total > perPage ? (
      <div
        className={classnames(style.paginationContainer)}
        ref={this.containerRef}
      >
        <div className={style.pagination}>
          {this.prev()}
          {this.numbers()}
          {this.next()}
        </div>
      </div>
    ) : null;
  }
}

Pagination.propTypes = {
  currentOffset: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  paginationHandler: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  currentOffset: 0,
  perPage: 10,
  total: 0
};

export default Pagination;
