import '@unleashit/recursive-data-lister/dist/recursive-data-lister.css';

import AsyncHandler from '@unleashit/async-handler';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import React from 'react';

import withAppContext from '../../utils/withAppContext';

// const users = [
//   {
//     id: 1,
//     name: 'joe',
//     booksRead: [
//       {
//         title: 'The Castle',
//         author: 'Franz Kafka',
//       },
//       {
//         title: 'Waynes World 2',
//         author: 'Mike Meyers IV',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'judy',
//     age: 27,
//     booksRead: [
//       {
//         title: 'The Overcoat',
//         author: 'Nikolai Gogol',
//         editions: ['first: 1842', 'second: 1844'],
//       },
//     ],
//   },
// ];

export function RecursiveDataListerDemo(props: any) {
  const { store } = props;
  return (
    <AsyncHandler request={() => store.generateComplexJson({ total: 3 })}>
      {(data) => (
        <RecursiveDataLister
          data={data}
          displayAsList
          arrayLeafPropName="id"
          repeatLeafPropName={false}
        />
      )}
    </AsyncHandler>
  );
}

export default withAppContext(RecursiveDataListerDemo);
