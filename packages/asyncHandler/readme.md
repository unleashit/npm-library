## Async Handler

HOC that takes an async function and returns views for loading, no-data and error states. It accepts an optional method to check a cache before the async function is run.

### Install

```
npm install @unleashit/async-handler
```

Required peer dependencies: react.

### Example

```javascript
import React from 'react';
import { withAsyncHandler } from '@unleashit/async-handler';

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

let userCache = null;

const UserList = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name} is {item.age} years old.
        </div>
      ))}
    </div>
  );
};

export default withAsyncHandler({
  request: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        userCache = { users, cacheDate: new Date() };
        resolve(users);
      }, 1500);
    });
  },
  cache: () => {
    // optional, runs each time before the request is called
    // should either return cache data or a falsy value to run the request
    return userCache && new Date() - userCache.cacheDate <= 30 * 60 * 1000
      ? userCache.users
      : null;
  },
  noResultsComponent: () => <div>No user's found.</div>,
  errorComponent: error => <div>Oops, there was a problem: {error}</div>,
})(UserList);
```

### CSS

Basic css can be imported: `import '@unleashit/async-handler/dist/style.css';`, or you can pass in a custom CSS module. Please see CSS in the main readme of the repo for more info.

### API and Props

```typescript
interface AsyncHandlerProps {
  request: () => Promise<any>;
  cache?: () => object | any[] | boolean | null;
  noResultsComponent?: () => React.ReactElement;
  errorComponent?: (error?: any) => React.ReactElement;
  loader?: React.FC<any>;
  cssModuleStyles?: { [key: string]: string };
}
```

| Name               | Type                                                 | Description                                                                                  | default                              |
| ------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| request            | () => Promise<any>                                   | Called if cache function exists and doesn't return a falsy value                             | required                             |
| cache              | () => object &#124; any[] &#124; boolean &#124; null | Optional function that should return a cache object or null (calls the request)              | n/a                                  |
| noResultsComponent | () => React.ReactElement                             | React component to override default no results message                                       | Nothing found.                       |
| errorComponent     | (error?: any) => React.ReactElement                  | React component to override default error message                                            | default message with error displayed |
| loader             | React.FC<any>                                        | React component instance to override the default loader                                      | Loading...                           |
| cssModuleStyles    | { [key: string]: string }                            | CSS Module object that optionally replaces default. Class names need to match default names. | default CSS                          |
