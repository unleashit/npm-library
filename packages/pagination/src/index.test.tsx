/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallow } from 'enzyme';
import Pagination from './index';

// declare const shallow: any;

describe('<Pagination />', () => {
  let wrapper: any;
  let props: any = {};

  jest
    .spyOn(Pagination.prototype, 'setContainerWidth')
    .mockImplementation(function setContainerWidth(this: { setState: any }) {
      this.setState({ containerWidth: 1200 });
    });

  beforeEach(() => {
    props = {
      currentOffset: 0,
      perPage: 10,
      paginationHandler: jest.fn(),
      total: 50,
    };

    wrapper = shallow(<Pagination {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.unl-pagination__container')).toHaveLength(1);
    const { containerWidth } = wrapper.state();
    expect(containerWidth).toEqual(1200);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders next button correctly', () => {
    expect(wrapper.find('.unl-pagination__inner').text()).toContain('next');
    expect(wrapper.find('.unl-pagination__inner').text()).not.toContain('prev');
  });

  it('renders prev button correctly', () => {
    props.currentOffset = 50;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.find('.unl-pagination__inner').text()).toContain('prev');
    expect(wrapper.find('.unl-pagination__inner').text()).not.toContain('next');
  });

  it('renders both prev and next btns correctly', () => {
    props.currentOffset = 25;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.find('.unl-pagination__inner').text()).toContain('prev');
    expect(wrapper.find('.unl-pagination__inner').text()).toContain('next');
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
      props.perPage = perPage;
      props.total = total;
      wrapper = shallow(<Pagination {...props} />);

      expect(
        wrapper.find('.unl-pagination__inner > .unl-pagination__number'),
      ).toHaveLength(ex);
    });
  });

  describe('click events', () => {
    it('#next btn calls the pagination handler with the right offset', () => {
      let nextBtn = wrapper.find('.unl-pagination__next');
      nextBtn.simulate('click');
      expect(props.paginationHandler).toHaveBeenLastCalledWith(10);

      props.currentOffset = 20;
      props.perPage = 5;
      wrapper = shallow(<Pagination {...props} />);
      nextBtn = wrapper.find('.unl-pagination__next');
      nextBtn.simulate('click');
      expect(props.paginationHandler).toHaveBeenLastCalledWith(25);
    });

    it('#prev btn calls the pagination handler with the right offset', () => {
      props.currentOffset = 30;
      props.perPage = 10;
      wrapper = shallow(<Pagination {...props} />);
      const prevBtn = wrapper.find('.unl-pagination__prev');
      prevBtn.simulate('click');
      expect(props.paginationHandler).toHaveBeenLastCalledWith(20);
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
        props = { ...props, currentOffset, perPage, pageClicked };
        props.paginationHandler.mockClear();

        wrapper = shallow(<Pagination {...props} />);
        const firstPageBtn = wrapper.find('.unl-pagination__number').at(pageClicked - 1);

        firstPageBtn.simulate('click');

        if (pageClicked - 1 === currentOffset / perPage) {
          // not called when clicking on current page
          expect(props.paginationHandler).not.toHaveBeenCalled();
        } else {
          expect(props.paginationHandler).toHaveBeenLastCalledWith(ex);
        }
      });
    });
  });
});
