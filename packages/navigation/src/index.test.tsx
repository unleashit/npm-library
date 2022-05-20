import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import NavigationContainer, { NavigationProps } from '.';

describe('<Navigation />', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  const props: NavigationProps = {
    links: [
      {
        title: 'Home',
        href: '/home',
        // icon: 'https://img.icons8.com/material/420/home-page.png',
        // iconPosition: 'left',
      },
      {
        title: 'Products',
        href: '/products',
      },
      {
        title: 'Services',
        href: '/services',
      },
      {
        title: 'About',
        href: '/about',
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
    let newProps: NavigationProps;

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
    expect(wrapper.find('nav.unl-navigation__container--clean')).toHaveLength(1);

    // the other options
    let newProps: NavigationProps = {
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

  it('takes an optional anchor/link component', () => {
    const MyLink = ({ children, ...rest }: React.PropsWithChildren<any>) => (
      <a {...rest}>myspeciallink - {children}</a>
    );
    let newProps: NavigationProps = {
      ...props,
      linkComponent: MyLink,
    };
    wrapper = mount(<NavigationContainer {...newProps} />);
    expect(wrapper.find('.unl-navigation__link').at(0).text()).toContain(
      'myspeciallink - Home',
    );

    // change the href attribute to "to" in order to be compatible with React Router Link, etc.
    newProps = {
      ...props,
      linkComponent: MyLink,
      linkComponentHrefAttr: 'to',
    };
    wrapper = mount(<NavigationContainer {...newProps} />);
    expect(wrapper.find('.unl-navigation__link').at(0).props().to).toEqual('/home');
  });
});
