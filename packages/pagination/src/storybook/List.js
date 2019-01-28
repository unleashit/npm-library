import React from "react";

const Row = ({row: {title, content, author}}) => {
  return (
    <li className="pagination__row">
      <h3 className="pagination__title">{title}</h3>
      <p className="pagination__author">by {author.name}</p>
      <div className="pagination__content">{content}</div>
    </li>
  );
};

const List = ({ data }) => {
  return (
    <ul className="pagination__list">
      {data.map((row, i) => (
        <Row row={row} key={`row-${i}`}/>
      ))}
    </ul>
  );
};

export default List;
