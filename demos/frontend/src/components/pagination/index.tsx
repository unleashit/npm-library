import React, { useEffect, useState } from 'react';
import Pagination from '@unleashit/pagination';
import css from '@unleashit/pagination/dist/pagination.module.css';
import Articles from './Articles';
import './pagination.scss';
import { getPageFromDB, getTotalRowsFromDB } from './api';

const perPage = 3;

export function PaginationDemo() {
  // The main thing you have to do is keep track of the changed offset
  // Pagination doesn't care about the list data,
  // only the current offset and total number of items
  const [totalRows, setTotalRows] = useState<number>();
  const [data, setData] = useState<any[]>();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Basic example without caching or error handling
    Promise.all([
      // this just gets the count(*) from the DB
      getTotalRowsFromDB(),
      // this gets one page of data starting with the current offset
      // with a `perPage` number of items
      getPageFromDB({ offset, limit: perPage }),
    ]).then(([total, page]) => {
      setTotalRows(total);
      setData(page);
    });
  }, [offset]);

  // handler is called whenever the user clicks on a page, next or prev buttons
  // and is provided the new offset corresponding with the button the user clicked.
  // For example, if perPage is set to 10 and the user clicks page 3,
  // the handler will be called with 20 (page 1 = 0, page 2 = 10, page 3 = 20, etc.).
  const paginationHandler = (newOffset: number) => {
    setOffset(newOffset);
  };

  if (!data) return <div>Loading...</div>;
  if (!totalRows || !data.length) return <div>No items found.</div>;

  return (
    <div className="pagination">
      <Articles data={data} />
      <Pagination
        currentOffset={offset}
        perPage={perPage}
        handler={paginationHandler}
        total={totalRows}
        cssModule={css}
      />
    </div>
  );
}

export default PaginationDemo;
