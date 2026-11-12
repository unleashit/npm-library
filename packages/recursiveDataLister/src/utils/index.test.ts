import {
  getChildTag,
  handleDateOrPrimitive,
  isDate,
  isIsoDateString,
  isObjectNotArray,
  isObjectNotDate,
  isPrimitive,
} from './index';

describe('recursiveDataLister utils', () => {
  it('getChildTag() maps list tags to their child tag', () => {
    expect(getChildTag('ul')).toEqual('li');
    expect(getChildTag('ol')).toEqual('li');
    expect(getChildTag('div')).toEqual('div');
    expect(getChildTag('section')).toEqual('div');
  });

  it('isPrimitive() accepts only primitives', () => {
    expect(isPrimitive('str')).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(10n)).toBe(true);
    expect(isPrimitive(null)).toBe(false);
    expect(isPrimitive(undefined)).toBe(false);
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
  });

  it('isObjectNotArray() excludes arrays', () => {
    const asObj = (val: unknown) => val as Record<string, unknown>;

    expect(isObjectNotArray({})).toBe(true);
    expect(isObjectNotArray([])).toBe(false);
    expect(isObjectNotArray(asObj('str'))).toBe(false);
  });

  it('isDate() rejects invalid dates', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('nonsense'))).toBe(false);
    expect(isDate('2024-01-01')).toBe(false);
  });

  it('isObjectNotDate() treats dates as leaves', () => {
    expect(isObjectNotDate({})).toBe(true);
    expect(
      isObjectNotDate(new Date() as unknown as Record<string, unknown>),
    ).toBe(false);
  });

  it('isIsoDateString() matches ISO 8601 timestamps', () => {
    expect(isIsoDateString('2024-01-15T10:30:00.000Z')).toBe(true);
    expect(isIsoDateString('2024-01-15T10:30:00+01:00')).toBe(true);
    expect(isIsoDateString('2024-01-15')).toBe(false);
    expect(isIsoDateString(42)).toBe(false);
  });

  describe('handleDateOrPrimitive()', () => {
    const format = (val: Date) => String(val.getUTCFullYear());

    it('formats Date objects', () => {
      const date = new Date(Date.UTC(2024, 0, 15));

      expect(handleDateOrPrimitive(date, format, false)).toEqual('2024');
    });

    it('parses ISO strings only when asked', () => {
      const iso = '2024-01-15T10:30:00.000Z';

      expect(handleDateOrPrimitive(iso, format, true)).toEqual('2024');
      expect(handleDateOrPrimitive(iso, format, false)).toEqual(iso);
    });

    it('passes other primitives through', () => {
      expect(handleDateOrPrimitive('red', format, true)).toEqual('red');
      expect(handleDateOrPrimitive(5, format, true)).toEqual(5);
    });
  });
});
