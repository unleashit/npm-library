## Async Handler

![npm (scoped)](https://img.shields.io/npm/v/@unleashit/async-handler.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/async-handler.svg)
![NPM](https://img.shields.io/npm/l/@unleashit/async-handler.svg)

HOC that takes an async function and returns views for loading, no-data and error states. It accepts an optional method to check a cache before the async function is run.

### Install

```
npm install @unleashit/async-handler
```

Required peer dependencies: react.

### Example with render prop

```javascript
import React from 'react';
import AsyncHandler from '@unleashit/async-handler';

class ColorList extends React.Component {
  request() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white']);
      }, 1500);
    });
  }

  render() {
    return (
      <AsyncHandler request={this.request}>
        {data => <div>{data.join(', ')}</div>}
      </AsyncHandler>
    );
  }
}

export default ColorList;
```

This will display default messages for loading, error or no results\* as needed. Note that `request` should return a promise with just the data part of the response so AsyncHandler can know when to display the no results component.

\* no results meaning when an object with no keys or a zero length array is returned.

### HOC example using cache and optional components

```javascript
import { withAsyncHandler } from '@unleashit/async-handler';
import MySpinner from './spinner';

// data to fetch asynchronously, here for demo reasons
const users = [
  {
    id: 1,
    name: 'joe',
    age: 30,
  },
  {
    id: 2,
    name: 'judy',
    age: 27,
  },
];

// for demonstration, normally you might use
// Redux or another decoupled place to store the cache.
let userCache = null;

const UserList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          {item.name} is {item.age} years old.
        </li>
      ))}
    </ul>
  );
};

export default withAsyncHandler({
  request: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        userCache = { users, cacheDate: new Date() };
        resolve(users);
      }, 1500);
    });
  },
  cache: () => {
    return userCache && new Date() - userCache.cacheDate <= 5 * 1000
      ? userCache.users
      : null;
  },
  loaderComponent: <MySpinner foo={'bar'} />,
  noResultsComponent: <div>No user{"'"}s found.</div>,
  errorComponent: ({ error }) => (
    <div>Oops, there was a problem: {JSON.stringify(error)}</div>
  ),
})(UserList);
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/async-handler/dist/async-handler.css'`. CSS Module support is baked in. If you use CSS Modules you can `import '@unleashit/async-handler/dist/async-handler.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModuleStyles` prop. Please see CSS in the main readme of the repo for more info.

### API and Props

```typescript
interface DefaultComponentProps {
  cssModuleStyle?: {
    [key: string]: string;
  };
  error?: any;
}
type DefaultComponent = (props?: DefaultComponentProps) => React.ReactNode;
interface Props {
  request: () => Promise<any>;
  cache: () => object | any[] | false | null;
  loaderComponent: DefaultComponent;
  noResultsComponent: DefaultComponent;
  errorComponent: DefaultComponent;
  cssModuleStyles?: { [key: string]: string };
  children: (data: any) => any;
}
```

| Name               | Type                                               | Description                                                                                  | default                              |
| ------------------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| request            | () => Promise<any>                                 | Called if cache function exists and doesn't return a falsy value                             | required                             |
| cache              | () => object &#124; any[] &#124; false &#124; null | Optional function that should return a cache object or null (calls the request)              | n/a                                  |
| noResultsComponent | () => React.ReactNode                              | React component to override default no results message                                       | Nothing found.                       |
| errorComponent     | ({ error }: {error: any} ) => React.ReactNode      | React component to override default error message                                            | default message with error displayed |
| loaderComponent    | () => React.ReactNode                              | React component to override the default loader                                               | Loading...                           |
| cssModuleStyles    | { [key: string]: string }                          | CSS Module object that optionally replaces default. Class names need to match default names. | default CSS                          |
| children           | (data: any) => any;                                | Function to be called with data if request returns with results (AsyncHandler only) | n/a                                  |
