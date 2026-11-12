import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import Pagination from './pagination';

/**
 * Pagination measures its container to decide how many page buttons fit.
 * jsdom reports no layout, so `getComputedStyle` is stubbed the way the old
 * Enzyme suite stubbed `setContainerWidth`.
 */
const mockContainerWidth = (width: number) =>
  jest.spyOn(window, 'getComputedStyle').mockImplementation(
    () =>
      ({
        getPropertyValue: (prop: string) =>
          prop === 'width' ? `${width}px` : '0px',
      }) as unknown as CSSStyleDeclaration,
  );

describe('<Pagination />', () => {
  let props: any;
  let utils: ReturnType<typeof render>;

  const setup = (next: any = props) => {
    utils?.unmount();
    utils = render(<Pagination {...next} />);
    return utils;
  };

  const numbers = () => document.querySelectorAll('.unl-pagination__number');

  beforeEach(() => {
    mockContainerWidth(1200);
    props = {
      currentOffset: 0,
      perPage: 10,
      handler: jest.fn(),
      total: 50,
    };

    setup();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    expect(
      document.querySelector('.unl-pagination__container'),
    ).toBeInTheDocument();
    expect(utils.container.firstChild).toMatchSnapshot();
  });

  it('renders nothing when total fits on one page', () => {
    setup({ ...props, total: 10 });

    expect(
      document.querySelector('.unl-pagination__container'),
    ).not.toBeInTheDocument();
  });

  it('renders next button correctly', () => {
    const inner = document.querySelector(
      '.unl-pagination__inner',
    ) as HTMLElement;

    expect(inner.textContent).toContain('next');
    expect(inner.textContent).not.toContain('prev');
  });

  it('renders prev button correctly', () => {
    setup({ ...props, currentOffset: 50 });
    const inner = document.querySelector(
      '.unl-pagination__inner',
    ) as HTMLElement;

    expect(inner.textContent).toContain('prev');
    expect(inner.textContent).not.toContain('next');
  });

  it('renders both prev and next btns correctly', () => {
    setup({ ...props, currentOffset: 25 });
    const inner = document.querySelector(
      '.unl-pagination__inner',
    ) as HTMLElement;

    expect(inner.textContent).toContain('prev');
    expect(inner.textContent).toContain('next');
  });

  it('renders custom prev/next labels', () => {
    setup({ ...props, prevLabel: 'previous', nextLabel: 'following' });
    const inner = document.querySelector(
      '.unl-pagination__inner',
    ) as HTMLElement;

    expect(inner.textContent).toContain('following');
    expect(inner.textContent).not.toContain('next ');
  });

  it('renders the right amount of pages', () => {
    const tests = [
      { perPage: 5, total: 20, ex: 4 },
      { perPage: 5, total: 21, ex: 5 },
      { perPage: 5, total: 16, ex: 4 },
      { perPage: 5, total: 15, ex: 3 },
      { perPage: 10, total: 100, ex: 10 },
      { perPage: 10, total: 98, ex: 10 },
      { perPage: 12, total: 50, ex: 5 },
    ];

    tests.forEach(({ perPage, total, ex }) => {
      setup({ ...props, perPage, total });

      expect(numbers()).toHaveLength(ex);
    });
  });

  it('marks the current page number as active', () => {
    setup({ ...props, currentOffset: 20, perPage: 10 });

    const active = document.querySelector('.unl-pagination__number--active');

    expect(active).toHaveTextContent('3');
  });

  it('collapses long ranges with ellipsis when the container is narrow', () => {
    mockContainerWidth(340);
    setup({ ...props, total: 200 });

    // a 340px container only fits 2 page buttons, so the range collapses to
    // the first pages plus an ellipsis and the last page
    expect(document.querySelectorAll('.unl-pagination__ellipsis')).toHaveLength(
      1,
    );
    expect(numbers()).toHaveLength(3);
    expect(numbers()[0]).toHaveTextContent('1');
    expect(numbers()[numbers().length - 1]).toHaveTextContent('20');
  });

  describe('click events', () => {
    it('#next btn calls the pagination handler with the right offset', () => {
      fireEvent.click(
        document.querySelector('.unl-pagination__next') as Element,
      );
      expect(props.handler).toHaveBeenLastCalledWith(10);

      setup({ ...props, currentOffset: 20, perPage: 5 });
      fireEvent.click(
        document.querySelector('.unl-pagination__next') as Element,
      );
      expect(props.handler).toHaveBeenLastCalledWith(25);
    });

    it('hides the next btn on the last page', () => {
      const handler = jest.fn();
      setup({ ...props, currentOffset: 30, handler });

      fireEvent.click(
        document.querySelector('.unl-pagination__next') as Element,
      );
      expect(handler).toHaveBeenLastCalledWith(40);

      setup({ ...props, currentOffset: 40, handler });
      // no next button rendered at the end of the list
      expect(
        document.querySelector('.unl-pagination__next'),
      ).not.toBeInTheDocument();
    });

    it('#prev btn calls the pagination handler with the right offset', () => {
      setup({ ...props, currentOffset: 30, perPage: 10 });

      fireEvent.click(
        document.querySelector('.unl-pagination__prev') as Element,
      );
      expect(props.handler).toHaveBeenLastCalledWith(20);
    });

    it('#page number btns call the pagination handler with the right offset', () => {
      const tests = [
        { currentOffset: 15, perPage: 10, pageClicked: 1, ex: 0 },
        { currentOffset: 15, perPage: 10, pageClicked: 4, ex: 30 },
        { currentOffset: 0, perPage: 10, pageClicked: 1 }, // calling current page
        { currentOffset: 0, perPage: 20, pageClicked: 3, ex: 40 },
        { currentOffset: 37, perPage: 5, pageClicked: 5, ex: 20 },
        { currentOffset: 0, perPage: 5, pageClicked: 5, ex: 20 },
        { currentOffset: 45, perPage: 5, pageClicked: 10 }, // calling current page
        { currentOffset: 45, perPage: 5, pageClicked: 2, ex: 5 },
      ];

      tests.forEach(({ currentOffset, perPage, pageClicked, ex }) => {
        const handler = jest.fn();
        setup({ ...props, currentOffset, perPage, handler });

        fireEvent.click(numbers()[pageClicked - 1]);

        if (pageClicked - 1 === Math.floor(currentOffset / perPage)) {
          // not called when clicking on current page
          expect(handler).not.toHaveBeenCalled();
        } else {
          expect(handler).toHaveBeenLastCalledWith(ex);
        }
      });
    });
  });

  describe('invalid props', () => {
    const expectRenderError = (badProps: any, message: string) => {
      // React logs caught errors; keep the console quiet for these cases
      const errorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);
      expect(() => setup(badProps)).toThrow(message);
      errorSpy.mockRestore();
    };

    it('throws when perPage is less than 1', () => {
      expectRenderError(
        { ...props, perPage: 0 },
        '`perPage` prop should not be less than 1',
      );
    });

    it('throws when currentOffset is negative', () => {
      expectRenderError(
        { ...props, currentOffset: -1 },
        '`offset` prop should not be less than 0',
      );
    });

    it('throws when total is negative', () => {
      expectRenderError(
        { ...props, total: -1 },
        '`total` prop should not be less than 0',
      );
    });
  });
});
