import * as React from 'react';
import Row from './Row';
import { isObjectNotArray, DateFormat } from './utils';

export interface RecursiveDataListerProps {
  data: { [key: string]: any } | any[];
  tag?: string;
  displayAsList?: boolean;
  arrayLeafPropName?: string | null;
  repeatLeafPropName?: boolean;
  cssModuleStyle?: any;
  dateFormat?: DateFormat;
}

const RecursiveDataLister = ({
  data,
  tag = 'ul',
  displayAsList = false,
  arrayLeafPropName = null,
  repeatLeafPropName = true,
  dateFormat = (val: Date) => val.toString(),
  cssModuleStyle: theme = {},
}: RecursiveDataListerProps): React.ReactElement => {
  if (displayAsList && isObjectNotArray(data)) {
    throw new Error(
      'The provided data must be an array when displayAsList prop is set to true',
    );
  }

  const key = (): string => Math.random().toString();
  const renderRow = <T extends {}>(rowData: T): React.ReactElement => (
    <Row
      key={key()}
      row={rowData}
      parentTag={tag}
      theme={theme}
      leafProp={arrayLeafPropName}
      repeatLeafProp={repeatLeafPropName}
      dateFormat={dateFormat}
    />
  );

  return displayAsList
    ? data.map(
        (row: any[]): React.ReactElement => {
          return renderRow<any[]>(row);
        },
      )
    : renderRow<object>(data);
};

export default RecursiveDataLister;
