## Pagination

Responsive pagination component for React in Typescript.

### Install
```
npm install @unleashit/pagination
```

### Example

```javascript
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

### Props

| Name      | Type |  Description | default |
| ----------- | ----------- | ---------| ------- |
| perPage      | Number       | Number of items per page | 10 |
| currentOfset   | Number        | Current offset of the list | 0 (required) |
| total | Number | Total number of items | 0 (required) |
| paginationHandler | Function | The method to call when a page or prev/next button is clicked. Provides the next offset as an argument. | required
| prevLabel | String | Label for previous button | 'prev' |
| nextLabel | String | Label for next button | 'next' |

