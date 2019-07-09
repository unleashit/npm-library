## Pagination

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/pagination.svg)](https://www.npmjs.com/package/@unleashit/pagination)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/pagination.svg)](https://bundlephobia.com/result?p=@unleashit/pagination)


Responsive pagination component for React in Typescript. Just give it a total, current offset and handler and it returns the new offset as needed

![pagination component](https://github.com/unleashit/npm-library/raw/master/packages/pagination/pagination.png)

### Install
```
npm install @unleashit/pagination
```

**Required peer dependency:** react

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
### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/pagination/dist/pagination.css'`. CSS Module support is baked in. If you use CSS Modules you can `import styles from '@unleashit/pagination/dist/pagination.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModuleStyles` prop. Please see CSS in the main readme of the repo for more info.


### Props

| Name      | Type |  Description | default |
| ----------- | ----------- | ---------| ------- |
| perPage      | Number       | Number of items per page | 10 |
| currentOffset   | Number        | Current offset of the list | 0 (required) |
| total | Number | Total number of items | 0 (required) |
| paginationHandler | Function | The method to call when a page or prev/next button is clicked. Provides the next offset as an argument. | required
| prevLabel | String | Label for previous button | 'prev' |
| nextLabel | String | Label for next button | 'next' |

