import './mock-data.scss';

import AsyncHandler from '@unleashit/async-handler';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import * as React from 'react';

import { AppContext } from '../../utils/context';

export function PaginationDemo() {
  const { store } = React.useContext(AppContext);

  const request1 = React.useMemo(() => store.generateFakeUsers({ total: 3 }), [store]);
  const request2 = React.useMemo(() => store.generateFakeProducts({ total: 3 }), [store]);
  const request3 = React.useMemo(() => store.generateComplexJson({ total: 3 }), [store]);


    return (
      <div>
        <h2>List of Users (user template)</h2>
        <AsyncHandler request={request1}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
        <h2>List of Products (product template)</h2>
        <AsyncHandler request={request2}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
        <h2>Nested Data (custom template)</h2>
        <AsyncHandler request={request3}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
      </div>
    );

}

export default PaginationDemo;
