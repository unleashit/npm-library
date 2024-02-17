import React from 'react';

const tableHeader = ['name', 'type', 'description', 'default'];

const CellType = ({
  col,
  children,
}: {
  col: number;
  children: React.ReactNode;
}) => React.createElement(col === 0 ? 'th' : 'td', null, children);

function PropsTable({ props }) {
  return (
    <table>
      <caption>Props</caption>
      <thead>
        <tr>
          {tableHeader.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.map((row) => (
          <tr>
            {row.map((cell, i) => (
              <CellType col={i}>{cell}</CellType>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PropsTable;
