import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '@unleashit/pagination';
import '@unleashit/navigation/dist/navigation.css';
import { loadBlogData } from './api.ts';
import Articles from './Articles.tsx';
import '@unleashit/pagination/dist/pagination.css';
import './pagination.stories.css';
import { WithUseArgsDecorator } from '../../../lib/decorators/WithUseArgsDecorator.tsx';
import { WithDarkModeStoryDecorator } from '../../../lib/decorators/WithDarkModeStoryDecorator.tsx';
import { makeFeaturedNotes, makeNotes } from '../../../lib/Notes.tsx';

const meta = {
  title: 'UI Widgets/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    perPage: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    currentOffset: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    total: {
      control: {
        type: 'number',
        min: 0,
      },
    },
  },
  args: {
    perPage: 2,
    total: 500,
    currentOffset: 0,
    handler: action('click'),
  },
  parameters: {
    notes: makeFeaturedNotes([
      <>
        Pagination doesn't care about the data itself, only the total number of
        items and current offset.
      </>,
      <>
        The handler is called whenever the user clicks on page, next or prev
        buttons and is provided with the new offset corresponding with the
        button the user clicked. For example, if <b>perPage</b> is set to 10 and
        the user clicks page 3, the handler will be called with 20 (page 1 = 0,
        page 2 = 10, page 3 = 20, etc.).
      </>,
    ]),
  },
  loaders: [
    async () => ({
      pagination: await loadBlogData(),
    }),
  ],
  decorators: [WithUseArgsDecorator, WithDarkModeStoryDecorator],

  render: function Render(args, { updateArgs, viewMode, globals, loaded }) {
    // The main thing you have to do is keep track of the changed offset
    // Pagination doesn't care about the list data,
    // only the current offset and total number of items
    // const [data, setData] = useState<any[]>();
    //
    // useEffect(() => {
    //   // Basic example without caching or error handling
    //   Promise.all([
    //     // this just gets the count(*) from the DB
    //     getTotalRowsFromDB(),
    //     // this gets one page of data starting with the current offset
    //     // with a `perPage` number of items
    //     getPageFromDB({ offset: args.currentOffset, limit: args.perPage }),
    //   ]).then(([total, page]) => {
    //     // setTotalRows(total);
    //     setData(page);
    //     updateArgs({ total });
    //   });
    // }, [args.currentOffset, args.perPage, updateArgs]);

    // handler is called whenever the user clicks on a page, next or prev buttons
    // and is provided the new offset corresponding with the button the user clicked.
    // For example, if perPage is set to 10 and the user clicks page 3,
    // the handler will be called with 20 (page 1 = 0, page 2 = 10, page 3 = 20, etc.).
    const paginationHandler = (newOffset: number) => {
      updateArgs({ currentOffset: newOffset });
    };

    if (!loaded.pagination) return <div>Loading...</div>;
    if (!loaded.pagination.length) return <div>No items found.</div>;

    const dataSlice = loaded.pagination.slice(
      args.currentOffset,
      args.currentOffset + (args.perPage || 2),
    );

    return (
      <div className="pagination-demo">
        <Articles data={dataSlice} />
        <Pagination
          {...args}
          {...(viewMode === 'docs'
            ? { darkMode: globals.scheme === 'dark mode' }
            : {})}
          handler={paginationHandler}
        />
      </div>
    );
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {
  args: {},
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes('Example view of the start of a long set of pages.'),
    ],
  },
};

export const Mid: Story = {
  args: {
    currentOffset: 248,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes(['Example view of the middle of a long set of pages.']),
    ],
  },
};

export const End: Story = {
  args: {
    currentOffset: 498,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes('Example view of the end of a long set of pages.'),
    ],
  },
};

export const DarkTheme: Story = {
  args: {
    darkMode: true,
  },
  parameters: {
    notes: [meta.parameters.notes, makeNotes('Alternate / dark theme.')],
  },
};
