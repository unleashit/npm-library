import './mock-data.scss';

import AsyncHandler from '@unleashit/async-handler';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import * as React from 'react';

import { AppContext } from '../../utils/context';

export class PaginationDemo extends React.Component<Record<string, unknown>> {
  static contextType = AppContext;

  request1 = () => this.context.store.generateFakeUsers({ total: 3 });

  request2 = () => this.context.store.generateFakeProducts({ total: 3 });

  request3 = () => this.context.store.generateComplexJson({ total: 3 });

  render() {
    return (
      <div>
        <h2>List of Users (user template)</h2>
        <AsyncHandler request={this.request1}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
        <h2>List of Products (product template)</h2>
        <AsyncHandler request={this.request2}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
        <h2>Nested Data (custom template)</h2>
        <AsyncHandler request={this.request3}>
          {(data: any[]) => <RecursiveDataLister data={data} />}
        </AsyncHandler>
      </div>
    );
  }
}

export default PaginationDemo;
