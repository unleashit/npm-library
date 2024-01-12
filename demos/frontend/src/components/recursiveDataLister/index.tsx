import React from 'react';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import dummyData from '../../dummyData/recursiveDataLister/dummyData.json';
import '@unleashit/recursive-data-lister/dist/recursive-data-lister.css';

export function RecursiveDataListerDemo() {
  return (
    <RecursiveDataLister
      data={dummyData}
      multiList
      arrayBranchProp="id"
      removeRepeatedProp
      dateFormat={(val) => new Date(val).toLocaleDateString()}
    />
  );
}

export default RecursiveDataListerDemo;
