import * as React from 'react';

export type FetchErrorProps = {
  fetchError: Error;
  setFetchError: React.Dispatch<React.SetStateAction<Error | null>>;
  reset: (...args: any) => void;
  clsName: (title: string) => string;
};

export function FetchError({
  fetchError,
  setFetchError,
  reset,
  clsName,
}: FetchErrorProps) {
  return fetchError ? (
    <div className={clsName('container')}>
      <h2>Something went wrong.</h2>
      <pre className={clsName('fetchErrorDisplay')}>{fetchError.message}</pre>
      <button
        type="button"
        className={clsName('button')}
        onClick={() => {
          reset();
          setFetchError(null);
        }}
      >
        Try again
      </button>
    </div>
  ) : null;
}
