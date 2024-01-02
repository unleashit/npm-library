import * as React from 'react';
import Pagination from '@unleashit/pagination';
import List from './List';
import generateFakeBlog from './dummyData';
import '@unleashit/pagination/dist/pagination.css';
import './pagination.scss';

const perPage = 3;
const fakeBlog = generateFakeBlog(500);

export function PaginationDemo() {
  const [offset, setOffset] = React.useState(0);

  const currentOffset = () => fakeBlog.slice(offset, offset + perPage);

  const paginationHandler = (newOffset: number) => {
    setOffset(newOffset);
  };

  return (
    <div className="pagination">
      <List data={currentOffset()} />
      <Pagination
        currentOffset={offset}
        perPage={perPage}
        paginationHandler={paginationHandler}
        total={fakeBlog.length}
      />
    </div>
  );
}

export default PaginationDemo;
