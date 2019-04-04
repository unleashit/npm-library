## Recursive Data Lister

React component that outputs a nested object/array recursively with options such as choice of html and choice of leaf key for arrays of objects.

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
    age: 27,
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
    displayAsList={true} // For array only: show first level children as separate parents. False is default (outputs as a single top level object)
    tag="ul" // parent html tag. ul is default, you can also choose ol or div
    arrayLeafPropName="title" // if set, this will use the property as node labels for arrays of objects (instead of the index). Careful with this, it only works with one property!
    repeatLeafPropName={false} // true is default. If arrayLeafPropName is set, this will remove the prop from the array so it isn't repeated
  />
);

export default RecursiveDataListerDemo;
```

### CSS

Basic css can be imported: `import '@unleashit/recursive-data-lister/dist/style.css';`, or you can pass in a custom CSS module. Please see CSS in the main readme of the repo for more info.

### API and Props

```typescript
export interface RecursiveDataListerProps {
  data: { [key: string]: any } | any[];
  tag?: string;
  displayAsList?: boolean;
  arrayLeafPropName?: string | null;
  repeatLeafPropName?: boolean;
  cssModuleStyle?: any;
}
```

| Name               | Type                      | Description                                                                                    | default     |
| ------------------ | ------------------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| data               | object or array           | object to display                                                                              | required    |
| displayAsList      | boolean                   | For array only: show first level children as separate parents                                  | false       |
| tag                | string                    | Parent HTML tag for a choice of ordered/unordered list or plain divs                           | ul          |
| arrayLeafPropName  | string                    | if set, this will use the property as node labels for arrays of objects (instead of the index) | null        |
| repeatLeafPropName | boolean                   | If arrayLeafPropName is set, this will remove the prop from the array so it isn't repeated     | false       |
| cssModuleStyles    | { [key: string]: string } | CSS Module object that optionally replaces default. Class names need to match default names.   | default CSS |
