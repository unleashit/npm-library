import React, { Component } from 'react';
import Navigation from '@unleashit/navigation';

import '@unleashit/navigation/dist/navigation.css';

const links = [
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
];

class NavigationDemo extends Component {
  render() {
    return (
      <div>
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={true}
          // direction={'vertical'}
          // template="light-buttons"
          // cssModuleStyles={style}
        />
        <br />
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={true}
          // direction={'vertical'}
          template="light-buttons"
          // cssModuleStyles={style}
        />
        <br />
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={true}
          // direction={'vertical'}
          template="dark-buttons"
          // cssModuleStyles={style}
        />
        <br />
        <br />
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={false}
          direction={'vertical'}
          template="clean"
          // cssModuleStyles={style}
        />
        <br />
        <br />
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={false}
          direction='vertical'
          template="light-buttons"
          // cssModuleStyles={style}
        />
        <br />
        <br />
        <Navigation
          links={links}
          // setting the isAuth prop enables default login/logout/signup btns
          isAuth={false}
          direction={'vertical'}
          template="dark-buttons"
          // cssModuleStyles={style}
        />
      </div>
    );
  }
}

export default NavigationDemo;
