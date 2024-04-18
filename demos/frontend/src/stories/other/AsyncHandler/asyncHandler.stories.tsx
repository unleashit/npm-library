import type { Meta, StoryObj } from '@storybook/react';
import { makeFeaturedNotes, makeNotes } from '../../../lib/Notes.tsx';
import '@unleashit/modal/dist/modal.css';
import { WithUseArgsDecorator } from '../../../lib/decorators/WithUseArgsDecorator.tsx';
import AsyncHandler from '@unleashit/async-handler';
import { WithMaxWidthDecorator } from '../../../lib/decorators/WithMaxWidthDecorator.tsx';
import './async-handler.storybook.css';

const students = [
  {
    id: 1,
    name: 'Dorothy Perkins',
    age: 19,
    favoriteColor: 'green',
  },
  {
    id: 2,
    name: 'Paul Brown',
    age: 20,
    favoriteColor: 'purple',
  },
];

function Demo({ data }: { data: typeof students }) {
  return (
    <div className="theme-aware-text">
      <h3>This component is wrapped in an AsyncHandler</h3>
      <p>
        When given an async request, it handles the loading, error and no result
        (empty object or array) states. It can also optionally check a cache.
      </p>
      <p>Async data:</p>
      {data.map((item: (typeof students)[0]) => (
        <div key={item.id}>
          {item.name} is {item.age} years old.
        </div>
      ))}
    </div>
  );
}

let studentCache: any = null;

const cache = () => {
  return studentCache &&
    new Date().getTime() - studentCache.cacheDate <= 10 * 1000
    ? studentCache.students
    : null;
};

const mockRequest =
  (data: any, shouldCache = false) =>
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        shouldCache &&
          (studentCache = { students: data, cacheDate: new Date() });
        resolve(data);
      }, 1500);
    });
  };

const meta = {
  title: 'other/Async Handler',
  component: AsyncHandler,
  tags: ['autodocs'],
  argTypes: {
    loaderComponent: {
      table: {
        type: { summary: 'ComponentType | ReactElement' },
        defaultValue: { summary: '<div>Loading...</div>' },
      },
    },
    noResultsComponent: {
      table: {
        type: { summary: 'ComponentType | ReactElement' },
        defaultValue: { summary: '<div>Nothing found.</div>' },
      },
    },
    errorComponent: {
      table: {
        type: { summary: 'ComponentType | ReactElement' },
        defaultValue: { summary: 'Default error component' },
      },
    },
  },
  args: {
    request: mockRequest(students),
  },
  parameters: {
    notes: makeFeaturedNotes([
      <>
        <b>
          <i>
            Async Handler is deprecated. Tanstack Query is a good alternative.
          </i>
        </b>
      </>,
      <>
        Async Handler is an HOC wraps a component with an asynchronous job. It
        handles loading, error, and no result (empty object or array) states. It
        can also optionally check a cache before calling its handler.
      </>,
      <>Comes in two flavors, HOC and render prop.</>,
    ]),
  },
  decorators: [WithUseArgsDecorator, WithMaxWidthDecorator],
  render: (args) => {
    return (
      <AsyncHandler {...args}>{(data) => <Demo data={data} />}</AsyncHandler>
    );
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {} as any,
};

export const NoResults: Story = {
  args: {
    request: mockRequest([]),
  } as any,
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([<>Default no results state.</>]),
    ],
  },
};

export const ErrorState: Story = {
  args: {
    request: () => new Promise((_, reject) => reject('Bad request.')),
  } as any,
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([<>Default error state after a promise rejection.</>]),
    ],
  },
};

export const With10SecCache: Story = {
  args: {
    request: mockRequest(students, true),
    cache,
  } as any,
  parameters: {
    notes: [
      meta.parameters.notes,
      ...makeNotes([
        <>This example uses a simple 10 second cache.</>,
        <>
          The <code>cache</code> function is user supplied. Async Handler will
          call it each time before the <code>request</code> handler is run. If
          it returns <b>false</b>, the <code>request</code> handler will fire.
          Otherwise, the cached data will be supplied to the wrapped component
        </>,
      ]),
    ],
  },
};
