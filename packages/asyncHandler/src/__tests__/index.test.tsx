import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import AsyncHandler, { withAsyncHandler } from '..';

const colors = ['red', 'green', 'blue'];

describe('<AsyncHandler />', () => {
  it('renders the loader until the request resolves, then the render prop', async () => {
    let resolveRequest: (value: string[]) => void = () => undefined;
    const request = jest.fn(
      () =>
        new Promise<string[]>((resolve) => {
          resolveRequest = resolve;
        }),
    );

    render(
      <AsyncHandler request={request}>
        {(data: string[]) => (
          <div className="test-class">{(data as string[]).join(', ')}</div>
        )}
      </AsyncHandler>,
    );

    expect(
      document.querySelector('.unl-async-handler__loader'),
    ).toBeInTheDocument();

    resolveRequest(colors);

    await waitFor(() =>
      expect(document.querySelector('.test-class')).toHaveTextContent(
        'red, green, blue',
      ),
    );
    expect(request).toHaveBeenCalledTimes(1);
  });

  it('shows the no results component for empty data', async () => {
    render(
      <AsyncHandler request={() => Promise.resolve([])}>
        {() => <div />}
      </AsyncHandler>,
    );

    await waitFor(() =>
      expect(
        document.querySelector('.unl-async-handler__nothing-found'),
      ).toHaveTextContent('Nothing found.'),
    );
  });

  it('shows the default error component when the request rejects', async () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    render(
      <AsyncHandler request={() => Promise.reject(new Error('request failed'))}>
        {() => <div />}
      </AsyncHandler>,
    );

    await waitFor(() =>
      expect(
        document.querySelector('.unl-async-handler__error-message'),
      ).toHaveTextContent('Sorry, we have encountered a problem.'),
    );
    expect(
      document.querySelector('.unl-async-handler__error-message'),
    ).toHaveTextContent('request failed');

    errorSpy.mockRestore();
  });

  // the component fetches in componentDidMount, so each case mounts its own tree
  it('accepts a custom loader component', () => {
    render(
      <AsyncHandler
        request={() => new Promise(() => {})}
        loaderComponent={() => <div>Stay tuned!</div>}
      >
        {() => <div />}
      </AsyncHandler>,
    );

    expect(screen.getByText('Stay tuned!')).toBeInTheDocument();
  });

  it('accepts a custom no results component', async () => {
    render(
      <AsyncHandler
        request={() => Promise.resolve(null)}
        noResultsComponent={() => <div>No user's found.</div>}
      >
        {() => <div />}
      </AsyncHandler>,
    );

    await waitFor(() =>
      expect(screen.getByText("No user's found.")).toBeInTheDocument(),
    );
  });

  it('accepts a custom error component', async () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    render(
      <AsyncHandler
        request={() => Promise.reject(new Error('kaboom'))}
        errorComponent={({ error }: { error?: Error }) => (
          <div>Oops, there was a problem: {error?.message}</div>
        )}
      >
        {() => <div />}
      </AsyncHandler>,
    );

    await waitFor(() =>
      expect(
        screen.getByText('Oops, there was a problem: kaboom'),
      ).toBeInTheDocument(),
    );
    errorSpy.mockRestore();
  });

  it('uses cached data and skips the request', async () => {
    const request = jest.fn(() => Promise.resolve(colors));

    render(
      <AsyncHandler request={request} cache={() => ['cached']}>
        {(data: string[]) => (
          <div className="test-class">{data.join(', ')}</div>
        )}
      </AsyncHandler>,
    );

    await waitFor(() =>
      expect(document.querySelector('.test-class')).toHaveTextContent('cached'),
    );
    expect(request).not.toHaveBeenCalled();
  });

  it('falls back to the request when the cache is empty', async () => {
    const request = jest.fn(() => Promise.resolve(colors));

    render(
      <AsyncHandler request={request} cache={() => false}>
        {(data: string[]) => (
          <div className="test-class">{data.join(', ')}</div>
        )}
      </AsyncHandler>,
    );

    await waitFor(() => expect(request).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(document.querySelector('.test-class')).toHaveTextContent(
        'red, green, blue',
      ),
    );
  });
});

describe('withAsyncHandler', () => {
  interface User {
    id: number;
    name: string;
    age: number;
  }

  const users: User[] = [
    { id: 1, name: 'joe', age: 30 },
    { id: 2, name: 'judy', age: 27 },
  ];

  const UserList = ({ data }: { data: User[] }) => (
    <ul className="user-list">
      {data.map((item) => (
        <li key={item.id}>
          {item.name} is {item.age} years old.
        </li>
      ))}
    </ul>
  );

  it('wraps a component and passes the resolved data', async () => {
    const WrappedHandler = withAsyncHandler({
      request: () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(users), 20);
        }),
      loaderComponent: () => <div>Stay tuned!</div>,
      noResultsComponent: () => <div>No user's found.</div>,
      errorComponent: ({ error }: { error?: Error }) => (
        <div>Oops, there was a problem: {error?.message}</div>
      ),
    })(UserList);

    render(<WrappedHandler />);

    expect(screen.getByText('Stay tuned!')).toBeInTheDocument();

    await waitFor(() =>
      expect(document.querySelector('.user-list')).toHaveTextContent(
        'joe is 30 years old.',
      ),
    );
    expect(document.querySelectorAll('.user-list li')).toHaveLength(2);
  });

  it('forwards extra props to the wrapped component', async () => {
    const ListWithTitle = ({
      data,
      title,
    }: {
      data: User[];
      title?: string;
    }) => (
      <div>
        <h3>{title}</h3>
        <UserList data={data} />
      </div>
    );

    const Wrapped = withAsyncHandler({
      request: () => Promise.resolve(users),
    })(ListWithTitle);

    render(<Wrapped title="Team" />);

    await waitFor(() =>
      expect(screen.getByRole('heading')).toHaveTextContent('Team'),
    );
  });
});
