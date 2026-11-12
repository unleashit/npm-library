import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { z } from 'zod';

import {
  camelToKebab,
  clearOnError,
  convertToSentence,
  genClassNames,
  getDefaultsFromZodObject,
  isCSSModule,
  normalizeComponentProp,
  reactComponentCase,
  removeUndefined,
  stringToKebab,
} from '../utils';

describe('shared string utils', () => {
  it('removeUndefined() drops undefined entries', () => {
    expect(removeUndefined([1, undefined, 2, undefined, 0])).toEqual([1, 2, 0]);
  });

  it('reactComponentCase() pascal cases a string', () => {
    expect(reactComponentCase('recursive data lister')).toEqual(
      'RecursiveDataLister',
    );
    expect(reactComponentCase('pagination')).toEqual('Pagination');
  });

  it('camelToKebab() dashes word boundaries', () => {
    expect(camelToKebab('closeBtn')).toEqual('close-btn');
    expect(camelToKebab('iconSpanLeft')).toEqual('icon-span-left');
    expect(camelToKebab('clean')).toEqual('clean');
  });

  it('stringToKebab() splits words, acronyms and numbers', () => {
    expect(stringToKebab('Some Title')).toEqual('some-title');
    expect(stringToKebab('userID')).toEqual('user-id');
    expect(stringToKebab('')).toEqual('');
  });

  it('convertToSentence() spaces camel case', () => {
    expect(convertToSentence('lightModeColor')).toEqual('Light Mode Color');
    expect(convertToSentence('Email')).toEqual('Email');
  });
});

describe('class name helpers', () => {
  it('genClassNames() builds prefixed kebab class names', () => {
    const { clsName } = genClassNames('login', {});

    expect(clsName('container')).toEqual('unl-login__container');
    expect(clsName('error-message')).toEqual('unl-login__error-message');
  });

  it('genClassNames() prefers the css module mapping', () => {
    const cssModule = { container: 'c__abc123' };
    const { clsName } = genClassNames('login', cssModule);

    expect(clsName('container')).toEqual('c__abc123');
    // unmapped keys still fall back to the default prefix
    expect(clsName('button')).toEqual('unl-login__button');
  });

  it('isCSSModule() falls back when the module has no entry', () => {
    expect(isCSSModule(undefined, 'fallback')).toEqual('fallback');
    expect(isCSSModule('fromModule', 'fallback')).toEqual('fromModule');
  });
});

describe('normalizeComponentProp()', () => {
  it('renders a component type', () => {
    const Comp = () => <div>from component</div>;

    render(<div>{normalizeComponentProp(Comp)}</div>);

    expect(document.querySelector('div div')).toHaveTextContent(
      'from component',
    );
  });

  it('clones an element with the supplied props', () => {
    const el = normalizeComponentProp(<span />, { className: 'cloned' });

    render(<div>{el}</div>);

    expect(document.querySelector('span')).toHaveClass('cloned');
  });

  it('returns an element untouched when no props are given', () => {
    const node = <span id="keep" />;

    expect(normalizeComponentProp(node)).toBe(node);
  });

  it('throws for values React cannot render as a component', () => {
    expect(() => normalizeComponentProp('not a component')).toThrow(
      'Prop received that is not a valid React component type or node',
    );
  });
});

describe('getDefaultsFromZodObject()', () => {
  it('reads declared defaults', () => {
    const schema = z.object({
      email: z.string().default('something'),
      password: z.string(),
    });

    expect(getDefaultsFromZodObject(schema)).toEqual({
      email: 'something',
      password: '',
    });
  });

  it('handles nested objects, arrays and prefill defaults', () => {
    const schema = z.object({
      profile: z.object({ name: z.string().default('Joe'), age: z.number() }),
      tags: z.array(z.string()),
      opt: z.string().optional(),
      prefault: z.string().prefault('pre'),
      flag: z.boolean(),
    });

    expect(getDefaultsFromZodObject(schema)).toEqual({
      profile: { name: 'Joe', age: undefined },
      tags: [],
      opt: '',
      prefault: 'pre',
      flag: undefined,
    });
  });

  it('unwraps refinements and optional objects', () => {
    const schema = z
      .object({ email: z.string().default('a@b.co') })
      .refine((data) => !!data.email);

    expect(getDefaultsFromZodObject(schema)).toEqual({ email: 'a@b.co' });
  });

  it('returns an empty object for non-object schemas', () => {
    expect(getDefaultsFromZodObject(z.string())).toEqual({});
    expect(getDefaultsFromZodObject(undefined)).toEqual({});
  });
});

describe('clearOnError()', () => {
  it('returns the names of fields flagged for clearing', () => {
    expect(
      clearOnError([
        { element: 'input', type: 'text', name: 'name', label: 'Name' },
        {
          element: 'input',
          type: 'password',
          name: 'password',
          label: 'Password',
          clearOnServerError: true,
        },
      ]),
    ).toEqual(['password']);
  });

  it('returns an empty array when nothing is flagged', () => {
    expect(clearOnError([])).toEqual([]);
  });
});
