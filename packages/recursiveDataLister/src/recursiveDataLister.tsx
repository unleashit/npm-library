import * as React from 'react';
import { CSSVars, mapCSSVarsToStyles, utils } from '@unleashit/common';
import Row from './Row';
import { DateFormat, isObjectNotArray } from './utils';

// mdx_recursive_dl_props_start
export interface RecursiveDataListerProps {
  /** Array or object of data to display */
  data: Record<string, any> | any[];
  /** Top level html tag for the list, like ul, ol or div */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * Display in multiple ul, ol, etc. lists per parent
   * Data must be an array
   */
  multiList?: boolean;
  /**
   * When a branch is an array of objects, select an object property to be used as a label instead
   * of the index. Note: this is a global setting, and applies to all child arrays
   * If the key isn't found, the index will be used anyway
   */
  arrayBranchProp?: string | null;
  /** By default, the arrayBranchProp will be repeated in the list */
  removeRepeatedProp?: boolean;
  /**
   * Detect ISO 8601 date strings and convert into Date objects
   * for the purpose of formatting with the dateFormat prop.
   * Uses the parseISO function from date-fns
   */
  handleISOStringDates?: boolean;
  /**
   * Function to customize the printed output of date objects
   * The default is toString()
   */
  dateFormat?: DateFormat;
  /** CSS custom property overrides */
  cssVars?: CSSVars<typeof varNames>;
  /** CSS module to target internal styles */
  cssModule?: Record<string, string>;
}
// mdx_recursive_dl_props_end

const { genClassNames } = utils;

const varNames = [
  'labelColor',
  'labelWeight',
  'valueWeight',
  'valueColor',
  'arrayBranchLabelWeight',
  'levelIndent',
  'bulletColor',
  'listStyleLevel1',
  'listStyleLevel2',
  'listStyleLevel3',
  'listStyleLevel4',
  'listStyleLevel5',
  'listStyleLevel6',
  'listStyleLevel7',
  'topLevelParentBorder',
] as const;

const key = (): string => Math.random().toString();

const RecursiveDataLister = ({
  data,
  tag = 'ul',
  multiList = false,
  arrayBranchProp = null,
  removeRepeatedProp = false,
  handleISOStringDates = false,
  dateFormat = (val: Date) => val.toString(),
  cssVars,
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

  const renderRow = <T,>(rowData: T): React.ReactElement => (
    <Row
      key={key()}
      row={rowData}
      parentTag={tag}
      branchProp={arrayBranchProp}
      removeRepeatedProp={removeRepeatedProp}
      handleISOStringDates={handleISOStringDates}
      dateFormat={dateFormat}
      clsName={clsName}
    />
  );

  return (
    <div
      className={clsName('container')}
      style={mapCSSVarsToStyles<typeof varNames>({
        cssVars,
        varNames,
      })}
    >
      {multiList
        ? data.map(
            (row: unknown[]): React.ReactElement => renderRow<unknown[]>(row),
          )
        : renderRow<unknown[] | Record<string, unknown>>(data)}
    </div>
  );
};

RecursiveDataLister.displayName = 'recursiveDataLister';
export default RecursiveDataLister;
