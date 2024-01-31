## Pagination

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/pagination.svg)](https://www.npmjs.com/package/@unleashit/pagination)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/pagination.svg)](https://bundlephobia.com/result?p=@unleashit/pagination)

Responsive pagination component for React. Just give it a total number of items and the current offset. It then calls a handler with the new offset as needed.

![pagination component](https://github.com/unleashit/npm-library/raw/master/packages/pagination/pagination.png)

## Features

- Lightweight UI component. Doesn't care about data, caching or state. Send it the total items and current offset, and it renders the correct interface.
- Responsive, with a container query to show the right amount of pages
- Gracefully supports unlimited pages
- Automatically hides next/prev buttons when not needed
- Customizable labels
- Default CSS or fully customizable
- CSS module support can override internal styles with a custom module

### Install

```bash
npm install @unleashit/pagination
```

**Peer dependency:** react

### Example

```tsx
import React from 'react';
import Pagination from '@unleashit/pagination';
import Articles from './Articles';
import { getTotalRowsFromDB, getPageFromDB } from './api';

const perPage = 10;

function PaginationDemo() {
  // The main thing you have to do is keep track of the changed offset
  // Pagination doesn't care about the list data,
  // only the current offset and total number of items
  const [totalRows, setTotalRows] = useState<number>();
  const [data, setData] = useState<any[]>();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Basic example without caching or error handling
    Promise.all([
      // example to get the count(*) from the DB
      getTotalRowsFromDB(),
      // example to get a page of data starting at the offset
      // and ending with the perPage amount
      getPageFromDB({ offset, limit: perPage }),
    ]).then(([total, page]) => {
      setTotalRows(total);
      setData(page);
    });
  }, [offset]);

  // handler is called whenever the user clicks on a page, next or prev buttons
  // and is provided the new offset corresponding with the button the user clicked.
  // For example, if perPage is set to 10 and the user clicks page 3,
  // the handler will be called with 20 (page 1 = 0, page 2 = 10, page 3 = 20, etc.).
  const paginationHandler = (newOffset: number) => {
    setOffset(newOffset);
  };

  if (!data) return <div>Loading...</div>;
  if (!totalRows || !data.length) return <div>No items found.</div>;

  return (
    <>
      <Articles data={data} />
      <Pagination
        currentOffset={offset}
        perPage={perPage}
        handler={paginationHandler}
        total={totalRows}
      />
    </>
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
| darkMode      | boolean                     | enables dark mode                                                                            | false     |
| cssVars       | object                      | optional object to override css custom properties                                            | undefined |
| cssModule     | Record<string, string>      | CSS Module object that optionally replaces default. Class names need to match expected names | undefined |
