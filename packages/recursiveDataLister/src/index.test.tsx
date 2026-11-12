import { render } from '@testing-library/react';
import * as React from 'react';

import RecursiveDataLister from '.';

const P = 'unl-recursiveDataLister';
const q = (selector: string) => document.querySelectorAll(`.${P}__${selector}`);
const texts = (selector: string) =>
  Array.from(q(selector)).map((el) => el.textContent);

describe('<RecursiveDataLister />', () => {
  const data = {
    name: 'Joe',
    age: 30,
    address: { city: 'Metairie', state: 'LA' },
  };

  it('renders an object as a nested list of labels and values', () => {
    const { container } = render(<RecursiveDataLister data={data} />);

    expect(document.querySelector(`.${P}__container`)).toBeInTheDocument();
    expect(container.querySelector('ul')).toHaveClass(`${P}__top-level-parent`);
    expect(texts('label')).toEqual(['name: ', 'age: ', 'city: ', 'state: ']);
    expect(texts('value')).toEqual(['Joe', '30', 'Metairie', 'LA']);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders branches for nested objects', () => {
    render(<RecursiveDataLister data={data} />);

    expect(texts('branch-label')).toEqual(['address']);
    expect(q('object-branch')).toHaveLength(1);
    // the nested object gets its own nested list
    expect(document.querySelectorAll(`ul.${P}__parent`)).toHaveLength(1);
  });

  it('renders arrays without field labels', () => {
    render(<RecursiveDataLister data={['red', 'green']} />);

    expect(texts('value')).toEqual(['red', 'green']);
    expect(q('label')).toHaveLength(0);
  });

  it('supports the tag prop for the top level element', () => {
    const { rerender } = render(<RecursiveDataLister data={data} tag="ol" />);
    expect(document.querySelector('ol')).toHaveClass(`${P}__top-level-parent`);

    rerender(<RecursiveDataLister data={data} tag="div" />);
    const div = document.querySelector(`div.${P}__top-level-parent`);
    expect(div).toBeInTheDocument();
    expect(document.querySelector(`div.${P}__child-item`)).toBeInTheDocument();
  });

  it('renders one list per top level item with multiList', () => {
    render(
      <RecursiveDataLister
        data={[{ name: 'Joe' }, { name: 'Judy' }]}
        multiList
      />,
    );

    expect(q('top-level-parent')).toHaveLength(2);
    expect(texts('value')).toEqual(['Joe', 'Judy']);
  });

  it('throws when multiList is used with an object', () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    expect(() => render(<RecursiveDataLister data={data} multiList />)).toThrow(
      'The provided data must be an array when displayAsList prop is set to true',
    );
    errorSpy.mockRestore();
  });

  describe('arrayBranchProp', () => {
    const people = {
      friends: [
        { name: 'Joe', age: 30 },
        { name: 'Judy', age: 27 },
      ],
    };

    it('labels array branches with the selected property', () => {
      render(<RecursiveDataLister data={people} arrayBranchProp="name" />);

      // the outer array is labelled with its key; each element uses the prop
      expect(texts('branch-label')).toEqual(['friends', 'Joe', 'Judy']);
      expect(q('array-branch-label')).toHaveLength(2);
    });

    it('repeats the prop inside the branch by default', () => {
      render(<RecursiveDataLister data={people} arrayBranchProp="name" />);

      expect(texts('label')).toContain('name: ');
    });

    it('removes the repeated prop with removeRepeatedProp', () => {
      render(
        <RecursiveDataLister
          data={people}
          arrayBranchProp="name"
          removeRepeatedProp
        />,
      );

      expect(texts('label')).not.toContain('name: ');
      expect(texts('label')).toContain('age: ');
    });

    it('falls back to the index when the property is missing', () => {
      render(
        <RecursiveDataLister
          data={{ friends: [{ age: 30 }] }}
          arrayBranchProp="name"
        />,
      );

      // missing property falls back to the array index
      expect(texts('branch-label')).toEqual(['friends', '0']);
    });
  });

  describe('dates', () => {
    const iso = '2024-01-15T10:30:00.000Z';

    it('prints ISO strings verbatim unless handleISOStringDates is set', () => {
      render(<RecursiveDataLister data={{ created: iso }} />);

      expect(texts('value')).toEqual([iso]);
    });

    it('passes parsed Date objects to dateFormat', () => {
      render(
        <RecursiveDataLister
          data={{ created: iso }}
          handleISOStringDates
          dateFormat={(val: Date) => val.toISOString().slice(0, 10)}
        />,
      );

      expect(texts('value')).toEqual(['2024-01-15']);
    });

    it('formats Date instances with dateFormat', () => {
      const date = new Date(Date.UTC(2024, 0, 15, 10, 30));

      render(
        <RecursiveDataLister
          data={{ created: date }}
          dateFormat={(val: Date) => String(val.getUTCFullYear())}
        />,
      );

      expect(texts('value')).toEqual(['2024']);
    });
  });
});
