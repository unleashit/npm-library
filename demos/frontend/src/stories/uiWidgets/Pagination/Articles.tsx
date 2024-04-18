interface RowProps {
  title: string;
  content: string;
  author: string;
}

function Row({ row: { title, content, author } }: { row: RowProps }) {
  return (
    <li className="pagination-demo__row">
      <h2 className="pagination-demo_title">
        {title[0].toUpperCase() + title.slice(1)}
      </h2>
      <p className="pagination-demo__author">by {author}</p>
      <div
        className="pagination-demo__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </li>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Articles({ data }: { data: any[] }) {
  return (
    <ul className="pagination-demo__list">
      {data.map((row, i) => (
        <Row row={row} key={`row-${i}`} />
      ))}
    </ul>
  );
}

export default Articles;
