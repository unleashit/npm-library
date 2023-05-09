import './pagination.scss';
import '@unleashit/pagination/dist/pagination.css';

import AsyncHandler from '@unleashit/async-handler';
import Pagination from '@unleashit/pagination';
import * as React from 'react';

import { AppContext } from '../../utils/context';
import List from './List';

interface State {
  offset: number;
}
export class PaginationDemo extends React.Component<Record<string, unknown>, State> {
  perPage: number;

  constructor(props: Record<string, unknown>) {
    super(props);

    this.perPage = 3;

    this.paginationHandler = this.paginationHandler.bind(this);
  }

  state = {
    offset: 0,
  };

  static contextType = AppContext;

  currentOffset() {
    const { offset } = this.state;
    const { data } = this.context.globalState.fakeBlog;
    return data.slice(offset, offset + this.perPage);
  }

  paginationHandler(newOffset: number) {
    this.setState({ offset: newOffset });
  }

  render() {
    return (
      <AsyncHandler request={() => this.context.store.generateFakeBlog({ total: 500 })}>
        {(fakeBlog: any[]) => (
          <div className="pagination">
            <List data={this.currentOffset()} />
            <Pagination
              currentOffset={this.state.offset}
              perPage={this.perPage}
              paginationHandler={this.paginationHandler}
              total={fakeBlog.length}
            />
          </div>
        )}
      </AsyncHandler>
    );
  }
}

export default PaginationDemo;
