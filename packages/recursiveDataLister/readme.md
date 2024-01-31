## Recursive Data Lister

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/recursive-data-lister.svg)](https://www.npmjs.com/package/@unleashit/recursive-data-lister)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/recursive-data-lister.svg)](https://bundlephobia.com/result?p=@unleashit/recursive-data-lister)

React component that recursively pretty prints nested lists or objects with various options for html markup and styling.

![recursive data lister component](https://github.com/unleashit/npm-library/raw/master/packages/recursiveDataLister/recursive-data-lister.png)

### Features

- Quickly display simple or complex nested lists and objects as html.
- Choice of html (ul, ol, div, etc.).
- Display as a single list or separate lists per first level parent.
- For arrays of objects, the option to choose a property to use its value as the heading (replace the numerical index).
- Handles dates. Either provide a formatter function, or by default they will be converted to strings.
- Basic default CSS available with easy customization through cssVars prop.

### Install

```
npm install @unleashit/recursive-data-lister
```

Required peer dependencies: react.

### Example

```javascript
import React from 'react';
import RecursiveDataLister from '@unleashit/recursive-data-lister';

const users = [
  {
    id: 1,
    name: 'joe',
    booksRead: [
      {
        title: 'The Castle',
        author: 'Franz Kafka',
      },
      {
        title: 'Waynes World 2',
        author: 'Mike Meyers IV',
      },
    ],
  },
  {
    id: 2,
    name: 'judy',
    booksRead: [
      {
        title: 'The Overcoat',
        author: 'Nikolai Gogol',
        editions: ['first: 1842', 'second: 1844'],
      },
    ],
  },
];

const RecursiveDataListerDemo = () => (
  <RecursiveDataLister
    data={users}
    multiList={true} // For array only: show first level children as separate parents. False is default (outputs as a single top level html list)
    tag="ul" // parent html tag. ul is default, you can also choose ol or div
    arrayBranchProp="title" // if set, this will use the property as node labels for arrays of objects (instead of the index). Careful with this, it only works with one property!
    removeRepeatedProp={true} // false is default. If arrayBranchProp is set, this will remove the prop from the array so it isn't repeated
  />
);

export default RecursiveDataListerDemo;
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/recursive-data-lister/dist/recursive-data-lister.css'`. Alternatively, if you use CSS Modules you can `import css from '@unleashit/recursive-data-lister/dist/recursive-data-lister.module.css'` and provide to the `cssModule` prop and/or use your own custom module targeting the internal class names. Please see CSS in the main readme of the repo for more info.

### API and Props

```typescript
interface RecursiveDataListerProps {
  data: Record<string, any> | any[];
  // Top level html tag for the list, like ul, ol or div
  tag?: keyof JSX.IntrinsicElements;
  // Display in multiple ul, ol, etc. lists per parent
  // Data must be an array
  multiList?: boolean;
  // When a branch is an array, select a property to be used as a label instead
  // of the index. Note: this is a global setting, and applies to all child arrays
  // If the prop isn't found, the index will be used anyway
  arrayBranchProp?: string | null;
  // By default, the arrayBranchProp will be repeated in the list
  removeRepeatedProp?: boolean;
  // Function to transform Date objects or strings (ex: stringified dates)
  dateFormat?: (val: Date | string) => string | number;
  cssModule?: Record<string, string>;
}
```

| Name               | Type            | Description                                                                                    | default                   |
| ------------------ | --------------- | ---------------------------------------------------------------------------------------------- | ------------------------- |
| data               | object or array | object to display                                                                              | required                  |
| multilist          | boolean         | For array only: show first level children as separate parents                                  | false                     |
| tag                | string          | Parent HTML tag for a choice of ordered/unordered list or plain divs                           | ul                        |
| arrayBranchProp    | string          | if set, it will use the property as branch labels for arrays of objects (instead of the index) | null                      |
| removeRepeatedProp | boolean         | If arrayBranchProp is set, this will remove the prop from the array so it isn't repeated       | false                     |
| dateFormat         | function        | Callback to process Date objects or strings, receives the Date or Date like string             | (elem) => elem.toString() |
| cssModule          | object          | CSS Module object that optionally replaces default. Class names need to match expected names.  | undefined                 |
