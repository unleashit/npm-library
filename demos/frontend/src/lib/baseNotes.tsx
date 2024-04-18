import { makeFeaturedNotes } from './Notes.tsx';

export const formComponentNotes = makeFeaturedNotes([
  <>
    All of the form components take a <code>handler</code> function, which is
    called when the user submits the form. It is supplied the values of the form
    and should query a server or API for results. The results should be returned
    as a Javascript object with a type of{' '}
    <code>Promise&lt;ServerResponse&gt;</code> (see docs).
  </>,
  <>
    Any server errors returned will be displayed in the form and/or optionally
    be called in a toast. If a success property is returned with a value of{' '}
    <b>true</b>, the <code>onSuccess</code> function will be called if provided.
    Alternatively, a default or custom <code>successMessage</code> component can
    be shown.
  </>,
]);
