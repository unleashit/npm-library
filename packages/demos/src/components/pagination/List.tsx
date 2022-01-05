import React from 'react';

interface RowProps {
  title: string;
  content: string;
  author: any;
}

function Row({ row: { title, content, author } }: { row: RowProps }) {
  return (
    <li className="pagination__row">
      <h3 className="pagination__title">{title}</h3>
      <p className="pagination__author">by {author.name}</p>
      <div className="pagination__content">{content}</div>
    </li>
  );
}

function List({ data }: { data: any[] }) {
  return (
    <ul className="pagination__list">
      {data.map((row, i) => (
        <Row row={row} key={`row-${i}`} />
      ))}
    </ul>
  );
}

export default List;
