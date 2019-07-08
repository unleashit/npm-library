/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow, ShallowWrapper } from 'enzyme';
import NavigationContainer, { Props } from '.';

describe('<Navigation />', () => {
  let wrapper: ShallowWrapper;
  const props: Props = {
    links: [
      {
        text: 'Home',
        url: '/home',
        // icon: 'https://img.icons8.com/material/420/home-page.png',
        // iconPosition: 'left',
      },
      {
        text: 'Products',
        url: '/products',
      },
      {
        text: 'Services',
        url: '/services',
      },
      {
        text: 'About',
        url: '/about',
        attrs: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<NavigationContainer {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.unl-navigation__container')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('has one NavLinks component as a child in no auth mode', () => {
    expect(wrapper.find('NavLinks')).toHaveLength(1);
  });

  it('shows auth links when they should be shown', () => {
    let newProps: Props;

    expect(wrapper.find('NavLinks')).toHaveLength(1);
    expect(wrapper.find('AuthLinks')).toHaveLength(0);

    newProps = {
      ...props,
      authLinks: {},
    };
    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('NavLinks')).toHaveLength(1);
    expect(wrapper.find('AuthLinks')).toHaveLength(1);

    newProps = {
      ...props,
      isAuth: false,
    };
    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('NavLinks')).toHaveLength(1);
    expect(wrapper.find('AuthLinks')).toHaveLength(1);

    newProps = {
      ...props,
      isAuth: false,
      authLinks: {},
    };
    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('NavLinks')).toHaveLength(1);
    expect(wrapper.find('AuthLinks')).toHaveLength(1);
  });

  it('displays template class', () => {
    // default template class
    console.log(wrapper.debug());
    expect(wrapper.find('nav.unl-navigation__container--clean')).toHaveLength(1);

    // the other options
    let newProps: Props = {
      ...props,
      template: 'plain',
    };

    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('nav.unl-navigation__container--plain')).toHaveLength(1);

    newProps = {
      ...props,
      template: 'dark-buttons',
    };
    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('nav.unl-navigation__container--dark-btns')).toHaveLength(1);

    newProps = {
      ...props,
      template: 'light-buttons',
    };
    wrapper = shallow(<NavigationContainer {...newProps} />);
    expect(wrapper.find('nav.unl-navigation__container--light-btns')).toHaveLength(1);
  });
});
