import * as React from 'react';
import { utils } from '@unleashit/common';
import Row from './Row';
import { DateFormat, isObjectNotArray } from './utils';

export interface RecursiveDataListerProps {
  data: Record<string, any> | any[];
  // Top level html tag for the list, like ul, ol or div
  tag?: keyof JSX.IntrinsicElements;
  // Display in multiple ul, ol, etc. lists per parent
  // Data must be an array
  multiList?: boolean;
  // When a branch is an array, select a property to be used as a label instead
  // of the index. Note: this is a global setting, and applies to all child arrays
  // If the prop isn't found, the index will be used anyway
  arrayBranchProp?: string | null;
  // By default, the arrayBranchProp will be repeated in the list
  removeRepeatedProp?: boolean;
  // Function to transform Date objects
  dateFormat?: DateFormat;
  cssModule?: Record<string, string>;
}

const { genClassNames } = utils;

const RecursiveDataLister = ({
  data,
  tag = 'ul',
  multiList = false,
  arrayBranchProp = null,
  removeRepeatedProp = false,
  dateFormat = (val: Date) => val.toString(),
  cssModule,
}: RecursiveDataListerProps): React.ReactElement => {
  const { clsName } = React.useMemo(
    () => genClassNames(RecursiveDataLister.displayName, cssModule),
    [cssModule],
  );

  if (multiList && isObjectNotArray(data)) {
    throw new Error(
      'The provided data must be an array when displayAsList prop is set to true',
    );
  }

  const key = (): string => Math.random().toString();
  const renderRow = <T,>(rowData: T): React.ReactElement => (
    <Row
      key={key()}
      row={rowData}
      parentTag={tag}
      branchProp={arrayBranchProp}
      removeRepeatedProp={removeRepeatedProp}
      dateFormat={dateFormat}
      clsName={clsName}
    />
  );

  return multiList
    ? data.map(
        (row: unknown[]): React.ReactElement => renderRow<unknown[]>(row),
      )
    : renderRow<unknown[] | Record<string, unknown>>(data);
};

RecursiveDataLister.displayName = 'recursiveDataLister';
export default RecursiveDataLister;
