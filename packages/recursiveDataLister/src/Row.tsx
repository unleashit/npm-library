import * as React from 'react';
import { getChild, isObject } from './utils';

interface RowProps {
  row: any;
  parentTag: any;
  nested?: boolean;
  leafProp: string | null;
  repeatLeafProp: boolean;
  cssModuleStyle?: any;
}

const Row: React.FC<RowProps> = ({
  row,
  parentTag: Parent,
  nested = false,
  leafProp,
  repeatLeafProp,
  cssModuleStyle: style = null,
}): React.ReactElement => {
  const Child: any = getChild(Parent);

  return (
    <Parent
      className={`${
        !nested
          ? `${style.topLevelParent} unl-r-data-lister__top-level-parent`
          : `${style.parent} unl-r-data-lister__child-parent`
      }`}
    >
      {Object.keys(row).map(
        (field): React.ReactElement | null => {
          if (typeof row[field] === 'object') {
            return (
              <Child
                key={field}
                className={`${style.leaf} unl-r-data-lister__leaf ${
                  isObject(row[field])
                    ? `${style.objectLeaf} unl-r-data-lister__object-leaf`
                    : ''
                }`}
              >
                {
                  <span className={`${style.leafLabel} unl-r-data-lister__leaf-label`}>
                    {isObject(row[field]) && leafProp && row[field][leafProp]
                      ? row[field][leafProp]
                      : field}
                  </span>
                }
                <Row
                  row={row[field]}
                  parentTag={Parent}
                  cssModuleStyle={style}
                  leafProp={leafProp}
                  repeatLeafProp={repeatLeafProp}
                  nested
                />
              </Child>
            );
          }
          return leafProp && field === leafProp && !repeatLeafProp ? null : (
            <Child
              key={field}
              className={`${style.childItem} unl-r-data-lister__child-item`}
            >
              {!Array.isArray(row) && (
                <span className={`${style.label} unl-r-data-lister__label`}>
                  {field}:{' '}
                </span>
              )}
              <span className={`${style.value} unl-r-data-lister__value`}>
                {row[field]}
              </span>
            </Child>
          );
        },
      )}
    </Parent>
  );
};

export default Row;
