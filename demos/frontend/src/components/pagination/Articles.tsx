import React from 'react';

interface RowProps {
  title: string;
  content: string;
  author: any;
}
/* eslint-disable react/no-danger */
function Row({ row: { title, content, author } }: { row: RowProps }) {
  return (
    <li className="pagination__row">
      <h2 className="pagination__title">
        {title[0].toUpperCase() + title.slice(1)}
      </h2>
      <p className="pagination__author">by {author}</p>
      <div
        className="pagination__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </li>
  );
}

function Articles({ data }: { data: any[] }) {
  return (
    <ul className="pagination__list">
      {data.map((row, i) => (
        <Row row={row} key={`row-${i}`} />
      ))}
    </ul>
  );
}

export default Articles;
