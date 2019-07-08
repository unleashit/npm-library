import * as React from 'react';
import Row from './Row';

export interface RecursiveDataListerProps {
  data: { [key: string]: any } | any[];
  tag?: string;
  displayAsList?: boolean;
  arrayLeafPropName?: string | null;
  repeatLeafPropName?: boolean;
  cssModuleStyle?: any;
}

const RecursiveDataLister: React.FC<RecursiveDataListerProps> = ({
  data,
  tag = 'ul',
  displayAsList = false,
  arrayLeafPropName = null,
  repeatLeafPropName = true,
  cssModuleStyle: theme = {},
}): React.ReactElement => {
  if (displayAsList && data.toString() === '[object Object]') {
    throw new Error(
      'The provided data is an object but the displayAsList prop is set to true',
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
