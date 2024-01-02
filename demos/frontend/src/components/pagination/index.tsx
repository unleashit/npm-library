import * as React from 'react';
import Pagination from '@unleashit/pagination';
import List from './List';
import dummyData from '../../dummyData/pagination/dummyData.json';

import '@unleashit/pagination/dist/pagination.css';
import './pagination.scss';

const perPage = 3;

export function PaginationDemo() {
  const [offset, setOffset] = React.useState(0);

  const currentOffset = () => dummyData.slice(offset, offset + perPage);

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
        total={dummyData.length}
      />
    </div>
  );
}

export default PaginationDemo;
