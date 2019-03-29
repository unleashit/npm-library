import React from 'react';
// import AsyncHandler from '@unleashit/async-handler';
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
    return userCache && new Date() - userCache.cacheDate <= 30 * 60 * 1000
      ? userCache.users
      : null;
  },
  noResultsComponent: () => <div>No user's found.</div>,
  errorComponent: (error) => <div>Oops, there was a problem: {error}</div>
})(UserList);


// class LoginDemo extends React.Component {
//   request() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(users);
//       }, 1500);
//     });
//   }
//
//   render() {
//     return (
//       <AsyncHandler request={this.request} noResultsMessage="No users found.">
//         {data => <UserList data={data} />}
//       </AsyncHandler>
//     );
//   }
// }

// export default LoginDemo;
