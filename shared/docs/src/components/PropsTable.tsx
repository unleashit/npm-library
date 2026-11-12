import React from 'react';

const tableHeader = ['name', 'type', 'description', 'default'];

const CellType = ({
  col,
  children,
}: {
  col: number;
  children: React.ReactNode;
}) => React.createElement(col === 0 ? 'th' : 'td', null, children);

type PropRows = string[][];

function PropsTable({ props }: { props: PropRows }) {
  return (
    <table>
      <caption>Props</caption>
      <thead>
        <tr>
          {tableHeader.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, i) => (
              <CellType key={i} col={i}>
                {cell}
              </CellType>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PropsTable;
