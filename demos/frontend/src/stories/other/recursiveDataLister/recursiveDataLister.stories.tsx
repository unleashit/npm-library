import type { Meta, StoryObj } from '@storybook/react';
import { makeFeaturedNotes, makeNotes } from '../../../lib/Notes.tsx';
import RecursiveDataLister from '@unleashit/recursive-data-lister';
import dummyData from './dummyData.json';
import '@unleashit/recursive-data-lister/dist/recursive-data-lister.css';
import './recursive-data-lister.storybook.css';

const meta = {
  title: 'other/Recursive Data Lister',
  component: RecursiveDataLister,
  tags: ['autodocs'],
  argTypes: {
    data: {
      table: {
        type: { summary: 'Record<string, any> | any[]' },
      },
    },
    arrayBranchProp: {
      table: {
        type: { summary: 'string | null' },
      },
      control: {
        type: 'text',
      },
    },
  },
  args: {
    data: dummyData.simple,
  },
  parameters: {
    notes: makeFeaturedNotes([
      <>
        Recursive Data Lister can output a tree of data with options to format
        the HTML, optionally show friendly labels in place of array indexes and
        handle dates
      </>,
      <>The top level data structure can be either an array or an object.</>,
    ]),
  },
  // decorators: [WithUseArgsDecorator, WithDarkModeStoryDecorator],
} satisfies Meta<typeof RecursiveDataLister>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleRaw: Story = {
  args: {
    data: dummyData.simple,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          Simple example with default options. Markup is an unordered list and
          no transformations.
        </>,
      ]),
    ],
  },
};

export const SimpleClean: Story = {
  args: {
    data: dummyData.simple,
    arrayBranchProp: 'title',
    removeRepeatedProp: true,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          Same as Simple Raw, but the array indexes are replaced with a field
          from the list to act as a label. To achieve this,{' '}
          <code>arrayBranchProp</code> is set to <b>title</b>. Then{' '}
          <code>removeRepeatedProp</code> has been set to <b>true</b> which
          removes the field from the list itself in order to avoid a duplicate.
        </>,
      ]),
    ],
  },
};

export const ComplexRaw: Story = {
  args: {
    data: dummyData.complex,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          More complex example with default options. Markup is an unordered list
          and no transformations.
        </>,
      ]),
    ],
  },
};

export const ComplexClean: Story = {
  args: {
    data: dummyData.complex,
    arrayBranchProp: 'id',
    removeRepeatedProp: true,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          More complex example with the same options as the Simple Clean
          example.
        </>,
      ]),
    ],
  },
};

export const MultiList: Story = {
  args: {
    data: dummyData.complex,
    arrayBranchProp: 'id',
    removeRepeatedProp: true,
    multiList: true,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          Simple to Complex Clean example, with <code>multilist</code> set to{' '}
          <b>true</b>. For top-level arrays only, this will output separate html
          lists per item.
        </>,
      ]),
    ],
  },
};

export const DateHandling: Story = {
  args: {
    data: dummyData.complex,
    arrayBranchProp: 'id',
    removeRepeatedProp: true,
    handleISOStringDates: true,
    dateFormat: (val) => val.toLocaleDateString(),
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          By default, <code>Date</code> objects will be converted to strings to
          avoid errors. The default conversion is <b>Date.toString()</b>, but
          can be modified with a <code>dateFormat</code> prop.
        </>,
        <>
          When <code>handleISOStringDates</code> is set to <b>true</b>, ISO
          dates in strings will additionally be detected and converted. In this
          example ISO string dates are detected, converted to Date objects then
          passed to a supplied formater function.
        </>,
      ]),
    ],
  },
};

export const NumberedList: Story = {
  args: {
    data: dummyData.simple,
    tag: 'ol',
    arrayBranchProp: 'title',
    removeRepeatedProp: true,
  },
  parameters: {
    notes: [
      meta.parameters.notes,
      makeNotes([
        <>
          Simple example with <code>tag</code> (HTML element) set to <b>ol</b>{' '}
          and the <code>title</code> field used as the array index label.
        </>,
        <>
          Note that while the tag can only be set globally, with a little CSS
          it's possible to override the display (bullets, numbers, etc.) at
          various nesting levels
        </>,
      ]),
    ],
  },
};
