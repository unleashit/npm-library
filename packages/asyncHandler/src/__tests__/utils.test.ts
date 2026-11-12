import { isEmpty } from '../utils';

describe('isEmpty()', () => {
  it('treats empty arrays and objects as empty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(['red'])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('does not throw on null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('handles falsy and truthy primitives', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty('red')).toBe(false);
  });
});
