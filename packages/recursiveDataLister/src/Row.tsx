import { ClsName } from '@unleashit/common';
import * as React from 'react';
import {
  DateFormat,
  getChildTag,
  handleDate,
  isDate,
  isObjectNotArray,
  isObjectNotDate,
  isPrimitive,
} from './utils';

interface RowProps {
  row: any;
  parentTag: keyof JSX.IntrinsicElements;
  nested?: boolean;
  branchProp: string | null;
  removeRepeatedProp: boolean;
  clsName: ClsName;
  dateFormat: DateFormat;
}
const Row: React.FC<RowProps> = ({
  row,
  parentTag: Parent,
  nested = false,
  branchProp,
  removeRepeatedProp,
  clsName,
  dateFormat,
}): React.ReactElement => {
  const Child = getChildTag(Parent);

  return (
    <Parent
      className={`${!nested ? clsName(`topLevelParent`) : clsName('parent')}`}
    >
      {isPrimitive(row) ? (
        <Child className={clsName('childItem')}>
          <span className={clsName('value')}>{row}</span>
        </Child>
      ) : (
        Object.keys(row).map((field): React.ReactElement | null => {
          if (isObjectNotDate(row[field])) {
            return (
              <Child
                key={field}
                className={`${clsName('childItem')} ${clsName('branch')} ${
                  isObjectNotArray(row[field]) ? clsName('objectBranch') : ''
                }`}
              >
                <span
                  className={`${clsName('branchLabel')}${
                    isObjectNotArray(row[field]) &&
                    branchProp &&
                    row[field][branchProp]
                      ? ` ${clsName('arrayBranchLabel')}`
                      : ''
                  }`}
                >
                  {isObjectNotArray(row[field]) &&
                  branchProp &&
                  row[field][branchProp]
                    ? row[field][branchProp]
                    : field}
                </span>
                <Row
                  row={row[field]}
                  parentTag={Parent}
                  clsName={clsName}
                  branchProp={branchProp}
                  removeRepeatedProp={removeRepeatedProp}
                  dateFormat={dateFormat}
                  nested
                />
              </Child>
            );
          }
          return nested &&
            branchProp &&
            field === branchProp &&
            removeRepeatedProp ? null : (
            <Child key={field} className={clsName('childItem')}>
              {!Array.isArray(row) && (
                <span className={clsName('label')}>{field}: </span>
              )}
              <span className={clsName('value')}>
                {isDate(row[field])
                  ? handleDate(row[field], dateFormat)
                  : row[field]}
              </span>
            </Child>
          );
        })
      )}
    </Parent>
  );
};

export default Row;
