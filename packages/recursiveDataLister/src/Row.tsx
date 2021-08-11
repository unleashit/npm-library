import { isCSSModule } from '@unleashit/common';
import * as React from 'react';

import {
  DateFormat,
  getChild,
  handleDate,
  isDate,
  isObjectNotArray,
  isObjectNotDate,
} from './utils';

interface RowProps {
  row: any;
  parentTag: any;
  nested?: boolean;
  leafProp: string | null;
  repeatLeafProp: boolean;
  theme: { [key: string]: string };
  dateFormat: DateFormat;
}

const Row: React.FC<RowProps> = ({
  row,
  parentTag: Parent,
  nested = false,
  leafProp,
  repeatLeafProp,
  theme,
  dateFormat,
}): React.ReactElement => {
  const Child: any = getChild(Parent);

  return (
    <Parent
      className={`${
        !nested
          ? isCSSModule(theme.topLevelParent, `unl-r-data-lister__top-level-parent`)
          : isCSSModule(theme.parent, `unl-r-data-lister__child-parent`)
      }`}
    >
      {Object.keys(row).map((field): React.ReactElement | null => {
        if (isObjectNotDate(row[field])) {
          return (
            <Child
              key={field}
              className={`${isCSSModule(theme.leaf, `unl-r-data-lister__leaf`)} ${
                isObjectNotArray(row[field])
                  ? isCSSModule(theme.objectLeaf, `unl-r-data-lister__object-leaf`)
                  : ''
              }`}
            >
              <span
                className={isCSSModule(theme.leafLabel, `unl-r-data-lister__leaf-label`)}
              >
                {isObjectNotArray(row[field]) && leafProp && row[field][leafProp]
                  ? row[field][leafProp]
                  : field}
              </span>
              <Row
                row={row[field]}
                parentTag={Parent}
                theme={theme}
                leafProp={leafProp}
                repeatLeafProp={repeatLeafProp}
                dateFormat={dateFormat}
                nested
              />
            </Child>
          );
        }
        return leafProp && field === leafProp && !repeatLeafProp ? null : (
          <Child
            key={field}
            className={isCSSModule(theme.childItem, `unl-r-data-lister__child-item`)}
          >
            {!Array.isArray(row) && (
              <span className={isCSSModule(theme.label, `unl-r-data-lister__label`)}>
                {field}:{' '}
              </span>
            )}
            <span className={isCSSModule(theme.value, `unl-r-data-lister__value`)}>
              {isDate(row[field]) ? handleDate(row[field], dateFormat) : row[field]}
            </span>
          </Child>
        );
      })}
    </Parent>
  );
};

export default Row;
