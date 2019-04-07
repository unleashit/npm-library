import * as React from 'react';
import { mount } from 'enzyme';
import NavigationContainer from '.';

describe('<Navigation />', () => {
  let wrapper;
  const props = {
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
    ]
  };

  beforeEach(() => {
    wrapper = mount(<NavigationContainer {...props} />);
  });

  it.only('renders without crashing', () => {
    expect(wrapper.find('.unl-navigation__container')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
