## Pagination

Responsive pagination component for React.

### Install
```
npm install @unleashit/pagination
```

### Example

```
import React from 'react';
import Pagination from '@unleashit/pagination';
import { getData } from 'dataService';

export class PaginationDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      data: null
    };
    this.perPage = 10;

    this.paginationHandler = this.paginationHandler.bind(this);
  }

  async componentDidMount() {
    const data = await getData();
    setState({ data });
  }

  getCurrentPage() {
    const { data, offset } = this.state;
    return data.slice(offset, offset + this.perPage);
  }

  paginationHandler(newOffset) {
    this.setState({ offset: newOffset });
  }

  render() {
    const { data } = this.state;
    if (!data) return <div>Loading...</div>;
    if (!data.length) return <div>No items found.</div>;

    return (
      <div>
        <ItemList data={this.getCurrentPage()} />
        <Pagination
          currentOffset={this.state.offset}
          perPage={this.perPage}
          paginationHandler={this.paginationHandler}
          total={data.length}
        />
      </div>
    );
  }
}
```

