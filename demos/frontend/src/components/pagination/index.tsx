import * as React from 'react';
import Pagination from '@unleashit/pagination';
import css from '@unleashit/pagination/dist/pagination.module.css';
import List from './List';
import dummyData from '../../dummyData/pagination/dummyData.json';
import './pagination.scss';

const perPage = 3;

export function PaginationDemo() {
  // The main thing you have to do is keep track of the changed offset
  // In this example, simply call setOffset with the new offset in the handler
  const [offset, setOffset] = React.useState(0);

  // Get the data starting with the current offset and a LIMIT equal to the perPage prop
  // You probably will want to cache these calls locally for a smooth experience
  // This is just a demo using local data
  const getCurrentPage = () => dummyData.slice(offset, offset + perPage);

  // handler is called with the new offset corresponding with the button the user clicks
  // For example, if perPage is set to 20 and the user clicks page 3,
  // the handler will be called with 40 (page 1 = 0, page 2 = 20, page 3 = 40, etc.).
  const paginationHandler = (newOffset: number) => {
    setOffset(newOffset);
  };

  return (
    <div className="pagination">
      <List data={getCurrentPage()} />
      <Pagination
        handler={paginationHandler}
        currentOffset={offset}
        perPage={perPage}
        total={dummyData.length}
        cssModule={css}
      />
    </div>
  );
}

export default PaginationDemo;
