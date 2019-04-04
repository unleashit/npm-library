import React, { Component } from 'react';
import Pagination from '@unleashit/pagination';
import AsyncHandler from '@unleashit/async-handler';
import List from './List';
import { AppContext } from '../../utils/context';
import './pagination.scss';
import '@unleashit/pagination/dist/style.css';

export class PaginationDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
    };
    this.perPage = 3;

    this.paginationHandler = this.paginationHandler.bind(this);
  }

  static contextType = AppContext;

  currentOffset() {
    const { offset } = this.state;
    const { data } = this.context.globalState.fakeBlog;
    return data.slice(offset, offset + this.perPage);
  }

  paginationHandler(newOffset) {
    this.setState({ offset: newOffset });
  }

  render() {
    return (
      <AsyncHandler request={() => this.context.store.generateFakeBlog({ total: 500 })}>
        {fakeBlog => (
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
