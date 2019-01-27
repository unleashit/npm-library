import React, { Component } from "react";
import Pagination from "@unleashit/pagination";
import List from "./List";
import { StateConsumer } from "../../App";
import "./pagination.scss";

export class PaginationDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
    this.perPage = 3;
    console.log(props);
  }

  async componentDidMount() {
    console.log(this.props.state);
    await this.props.store.generateFakeBlog(50);
  }

  currentOffset() {
    const { offset } = this.state;
    const data = this.props.state.fakeBlog;
    return data.slice(offset, this.perPage);
  }

  paginationHandler(newOffset) {
    this.setState({ currentOffset: newOffset });
  }

  render() {
    const {
      state: { fakeBlog }
    } = this.props;
    if (!fakeBlog || fakeBlog.length === 0) return <div>Loading...</div>;

    return (
      <div className="pagination">
        <List data={this.currentOffset()} />
        <Pagination
          currentOffset={this.state.offset}
          perPage={this.perPage}
          paginationHandler={this.paginationHandler}
          total={fakeBlog.length}
        />
      </div>
    );
  }
}

const withProvider = Component => () => (
  <StateConsumer>
    {({ state, store }) => {
      return <Component state={state} store={store} />;
    }}
  </StateConsumer>
);

export default withProvider(PaginationDemo);
