## Pagination

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/pagination.svg)](https://www.npmjs.com/package/@unleashit/pagination)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/pagination.svg)](https://bundlephobia.com/result?p=@unleashit/pagination)

Responsive pagination component for React. Just give it a total number of items and the current offset. It then calls a handler with new offset as needed.

![pagination component](https://github.com/unleashit/npm-library/raw/master/packages/pagination/pagination.png)

### Install

```bash
npm install @unleashit/pagination
```

**Required peer dependency:** react

### Example

```tsx
import React from 'react';
import Pagination from '@unleashit/pagination';
import { getTotalRowsFromDB, getPageFromDB } from './api';

const perPage = 10;

function PaginationDemo() {
  const [totalRows, setTotalRows] = useState();
  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Basic example without caching or error handling
    promise
      .all([getTotalRowsFromDB(), getPageFromDB({ offset, limit: perPage })])
      .then(([total, data]) => {
        setTotalRows(total);
        setData(data);
      });
  }, [offset]);

  const paginationHandler = (newOffset: number) => {
    // handler will be called whenever the user clicks on a page, next or prev btns
    setOffset(newOffset);
  };

  if (!data) return <div>Loading...</div>;
  if (!!data.length) return <div>No items found.</div>;

  return (
    <div>
      <DisplayList data={data} />
      <Pagination
        currentOffset={offset}
        perPage={perPage}
        handler={paginationHandler}
        total={totalRows}
      />
    </div>
  );
}
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/pagination/dist/pagination.css'`. Alternatively, if you use CSS Modules you can `import css from '@unleashit/pagination/dist/pagination.module.css'` and provide to the `cssModule` prop and/or use your own custom module targeting the internal class names. Please see CSS in the main readme of the repo for more info.

### Props

| Name          | Type                        | Description                                                                                  | default   |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------- | --------- |
| handler       | (newOffset: number) => void | The method to call when a page or prev/next button is clicked. Provides the next offset.     | required  |
| total         | Number                      | Total number of items                                                                        | required  |
| currentOffset | Number                      | Current offset of the list                                                                   | required  |
| perPage       | Number                      | Number of items per page                                                                     | 10        |
| prevLabel     | String                      | Label for previous button                                                                    | 'prev'    |
| nextLabel     | String                      | Label for next button                                                                        | 'next'    |
| cssModule     | Record<string, string>      | CSS Module object that optionally replaces default. Class names need to match expected names | undefined |
