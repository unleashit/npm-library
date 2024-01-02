import '@unleashit/recursive-data-lister/dist/recursive-data-lister.css';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import React from 'react';
import { generateComplexJson } from './dummyData';

const dummyData = generateComplexJson();

export function RecursiveDataListerDemo() {
  return (
    <RecursiveDataLister
      data={dummyData}
      displayAsList
      arrayLeafPropName="id"
      repeatLeafPropName={false}
    />
  );
}

export default RecursiveDataListerDemo;
