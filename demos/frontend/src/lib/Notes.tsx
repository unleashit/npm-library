import { ReactNode } from 'react';

export const makeNotes = (
  notes: ReactNode | ReactNode[] | string | string[],
  Tag: keyof JSX.IntrinsicElements = 'p',
  featured = false,
): string[] | ReactNode[] => {
  if (!Array.isArray(notes))
    return [<p key={notes?.toString() ?? Math.random()}>&bull; {notes}</p>];

  return [
    ...notes.map((note, i) => {
      return (
        <Tag key={`${featured ? 'featured-' : ''}note-${i}`}>&bull; {note}</Tag>
      );
    }),
  ];
};

export const makeFeaturedNotes = (
  notes: ReactNode | ReactNode[] | string | string[],
  tag: keyof JSX.IntrinsicElements = 'p',
) => {
  return (
    <div className="featured-notes" key="featured-note-header">
      {makeNotes(notes, tag, true)}
    </div>
  );
};
