import React from 'react';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import withAppContext from '../../utils/withAppContext';
import AsyncHandler from '@unleashit/async-handler';
import '@unleashit/recursive-data-lister/dist/style.css';

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

export function RecursiveDataListerDemo(props) {
  const { store } = props;
  return (
    <AsyncHandler request={() => store.generateComplexJson({ total: 3 })}>
      {data => (
        <RecursiveDataLister
          data={data}
          displayAsList={true}
          arrayLeafPropName={'id'}
          repeatLeafPropName={false}
        />
      )}
    </AsyncHandler>
  );
}

export default withAppContext(RecursiveDataListerDemo);
