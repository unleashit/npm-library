import * as React from 'react';
import * as defaultStyle from './scss/recursiveDataLister.scss';
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
  cssModuleStyle,
}): React.ReactElement => {
  if (displayAsList && data.toString() === '[object Object]') {
    throw new Error(
      'The provided data is an object but the displayAsList prop is set to true',
    );
  }

  const style = cssModuleStyle || defaultStyle;
  const key = (): string => Math.random().toString();
  const renderRow = <T extends {}>(rowData: T): React.ReactNode => (
    <Row
      key={key()}
      row={rowData}
      parentTag={tag}
      cssModuleStyle={style}
      leafProp={arrayLeafPropName}
      repeatLeafProp={repeatLeafPropName}
    />
  );

  return displayAsList
    ? data.map((row: any[]) => {
        return renderRow<any[]>(row);
      })
    : renderRow<object>(data);
};

export default RecursiveDataLister;
