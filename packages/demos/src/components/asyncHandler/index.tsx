import '@unleashit/async-handler/dist/async-handler.css';

import AsyncHandler, { withAsyncHandler } from '@unleashit/async-handler';
import React from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
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

let userCache: any = null;

const UserList = ({ data }: { data: User[] }) => {
  return (
    <>
      {data.map((item: User) => (
        <div key={item.id}>
          {item.name} is {item.age} years old.
        </div>
      ))}
    </>
  );
};

export default withAsyncHandler({
  request: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        userCache = { users, cacheDate: new Date() };
        resolve(users);
      }, 1500);
    });
  },
  cache: () => {
    return userCache && new Date().getTime() - userCache.cacheDate <= 5 * 1000
      ? userCache.users
      : null;
  },
  // loaderComponent: () => <div>Spinner is spinning...</div>,
  // noResultsComponent: () => <div>No user{"'"}s found.</div>,
  errorComponent: ({ error }) => (
    <div>Oops, there was a problem: {JSON.stringify(error)}</div>
  ),
})(UserList);

// left in to test render prop version
export class AsyncHandlderDemo extends React.Component {
  request() {
    return new Promise((resolve) => {
      setTimeout(() => {
        userCache = { users, cacheDate: new Date() };
        resolve(users);
      }, 1500);
    });
  }

  cache() {
    return userCache && new Date().getTime() - userCache.cacheDate <= 5 * 1000
      ? userCache.users
      : null;
  }

  render() {
    return (
      <AsyncHandler request={this.request} cache={this.cache}>
        {(data) => <UserList data={data} />}
      </AsyncHandler>
    );
  }
}
