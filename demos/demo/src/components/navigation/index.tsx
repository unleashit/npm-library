import Navigation, { NavigationLink } from '@unleashit/navigation';
import React from 'react';
import { Link } from 'react-router-dom';
import '@unleashit/navigation/dist/navigation.css';
import styles from './style.module.scss';

const links: NavigationLink[] = [
  {
    title: 'Home',
    href: '/home',
    icon: 'https://img.icons8.com/material/420/home-page.png',
    iconPosition: 'right',
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
];

const NavigationDemo = () => (
  <div className={styles.navbar}>
    <p>With auth sidecar (logged in) and default/clean template</p>
    <Navigation
      linkComponent={Link}
      linkComponentHrefAttr="to"
      links={links}
      isAuth // setting the isAuth prop enables default login/logout/signup btns
    />
    <p>With auth sidecar (logged out) and dark-buttons template</p>
    <Navigation
      linkComponent={Link}
      linkComponentHrefAttr="to"
      links={links}
      isAuth={false}
      template="dark-buttons"
    />
    <p>Dark-buttons template, no auth sidecar </p>
    <Navigation links={links} template="light-buttons" />
    <p>Vertical with dark-buttons template and auth sidecar</p>
    <Navigation
      linkComponent={Link}
      linkComponentHrefAttr="to"
      links={links}
      isAuth={false}
      template="dark-buttons"
      direction="vert"
    />
    <p>"none" template with auth sidecar</p>
    <Navigation links={links} isAuth={false} template="none" />
  </div>
);

export default NavigationDemo;
