import React from 'react';

/* eslint-disable react/prop-types */
const Row = ({ row: { title, content, author } }) => {
  return (
    <li className="pagination__row">
      <h3 className="pagination__title">{title}</h3>
      <p className="pagination__author">by {author.name}</p>
      <div className="pagination__content">{content}</div>
    </li>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const List = ({ data }) => {
  return data.length ? (
    <ul className="pagination__list">
      {data.map((row, i) => (
        <Row row={row} key={`row-${i}`} />
      ))}
    </ul>
  ) : null;
};

export default List;
