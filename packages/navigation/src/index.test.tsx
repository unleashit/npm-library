import { render } from '@testing-library/react';
import * as React from 'react';

import NavigationContainer, { NavigationProps } from '.';

/**
 * Enzyme's `wrapper.find('AuthLinks')` is replaced by the DOM those components
 * produce, so the assertions target the rendered lists and class names.
 */
describe('<Navigation />', () => {
  const props: NavigationProps = {
    links: [
      {
        title: 'Home',
        href: '/home',
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

  const nav = () => document.querySelector('nav') as HTMLElement;
  const links = () =>
    document.querySelectorAll(
      '.unl-navigation__nav-list .unl-navigation__link',
    );
  const authLinks = () =>
    document.querySelectorAll(
      '.unl-navigation__auth-links .unl-navigation__link',
    );

  let utils: ReturnType<typeof render>;
  const setup = (next: NavigationProps = props) => {
    utils?.unmount();
    utils = render(<NavigationContainer {...next} />);
    return utils;
  };

  beforeEach(() => {
    setup();
  });

  it('renders without crashing', () => {
    expect(nav()).toHaveClass('unl-navigation__container');
    expect(utils.container.firstChild).toMatchSnapshot();
  });

  it('renders every link with its href and title', () => {
    const rendered = links();

    expect(rendered).toHaveLength(props.links.length);
    rendered.forEach((el, i) => {
      expect(el).toHaveAttribute('href', props.links[i].href);
      expect(el).toHaveTextContent(props.links[i].title);
    });
  });

  it('passes link attrs through to the anchor', () => {
    const about = links()[3];

    expect(about).toHaveAttribute('target', '_blank');
    expect(about).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has one nav list and no auth links by default', () => {
    expect(document.querySelectorAll('.unl-navigation__nav-list')).toHaveLength(
      1,
    );
    expect(
      document.querySelector('.unl-navigation__auth-links'),
    ).not.toBeInTheDocument();
  });

  it('shows auth links when they should be shown', () => {
    // authLinks without isAuth renders the sidecar but no default links
    setup({ ...props, authLinks: {} });
    expect(
      document.querySelector('.unl-navigation__auth-links'),
    ).toBeInTheDocument();
    expect(authLinks()).toHaveLength(0);

    // isAuth alone is enough to render the auth sidecar with defaults:
    // logged out state shows login and signup, but no logout
    setup({ ...props, isAuth: false });
    expect(
      document.querySelector('.unl-navigation__auth-links'),
    ).toBeInTheDocument();
    expect(authLinks()).toHaveLength(2);
    expect(
      document.querySelector('.unl-navigation__login-link'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('.unl-navigation__logout-link'),
    ).not.toBeInTheDocument();

    // logged in state: only logout
    setup({ ...props, isAuth: true });
    expect(
      document.querySelector('.unl-navigation__logout-link'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('.unl-navigation__login-link'),
    ).not.toBeInTheDocument();
    expect(authLinks()).toHaveLength(1);

    // user supplied auth links win over the defaults
    setup({
      ...props,
      isAuth: false,
      authLinks: { login: { title: 'Sign in', href: '/sign-in' } },
    });
    expect(
      document.querySelector('.unl-navigation__login-link'),
    ).toHaveTextContent('Sign in');
    expect(
      document.querySelector('.unl-navigation__login-link'),
    ).toHaveAttribute('href', '/sign-in');
  });

  it('hides an auth link when display is false', () => {
    setup({
      ...props,
      isAuth: false,
      authLinks: {
        signup: { title: 'Signup', href: '/signup', display: false },
      },
    });

    expect(
      document.querySelector('.unl-navigation__signup-link'),
    ).not.toBeInTheDocument();
    expect(authLinks()).toHaveLength(1);
  });

  it('displays corrent template classes', () => {
    // default template (clean)
    expect(nav()).toHaveClass('unl-navigation__clean');

    // none template
    setup({ ...props, template: 'none' });
    // template of none should output a different classname on the container with no extra template classes
    expect(nav()).toHaveClass('unl-navigation__none');
    expect(nav()).not.toHaveClass('unl-navigation__clean');

    setup({ ...props, template: 'dark-buttons' });
    expect(nav()).toHaveClass('unl-navigation__dark-buttons');

    setup({ ...props, template: 'light-buttons' });
    expect(nav()).toHaveClass('unl-navigation__light-buttons');
  });

  it('adds the vertical class for vertical link direction', () => {
    setup({ ...props, direction: 'vertical' });

    expect(nav()).toHaveClass('unl-navigation__vertical');

    setup({ ...props, direction: 'horizontal' });
    expect(nav()).not.toHaveClass('unl-navigation__vertical');
  });

  it('appends user supplied container classes', () => {
    setup({ ...props, classes: ['my-nav', 'js-nav'] });

    expect(nav()).toHaveClass('my-nav');
    expect(nav()).toHaveClass('js-nav');
  });

  it('marks the active link', () => {
    setup({
      ...props,
      links: [
        { title: 'Home', href: '/home', active: true },
        ...props.links.slice(1),
      ],
    });

    expect(document.querySelector('.unl-navigation__link-item')).toHaveClass(
      'unl-navigation__active',
    );
  });

  it('toggles the data-theme attribute with darkMode', () => {
    expect(nav()).toHaveAttribute('data-theme', 'light');

    setup({ ...props, darkMode: true });

    expect(nav()).toHaveAttribute('data-theme', 'dark');
  });

  it('takes an optional anchor/link component', () => {
    const MyLink = ({
      children,
      ...rest
    }: { children?: React.ReactNode } & Record<string, any>) => (
      <a {...rest}>myspeciallink - {children}</a>
    );

    setup({ ...props, linkComponent: MyLink });

    expect(links()[0]).toHaveTextContent('myspeciallink - Home');
  });

  it('uses a custom href attribute for router links', () => {
    const MyLink = ({
      children,
      to,
      ...rest
    }: {
      children?: React.ReactNode;
      to?: string;
    } & Record<string, any>) => (
      <a {...rest} href={to}>
        router - {children}
      </a>
    );

    setup({
      ...props,
      linkComponent: MyLink,
      linkComponentHrefAttr: 'to',
    });

    expect(links()[0]).toHaveAttribute('href', '/home');
    expect(links()[0]).toHaveTextContent('router - Home');
  });

  it('renders icons on either side of the title', () => {
    const icon = 'https://img.icons8.com/material/420/home-page.png';

    setup({ ...props, links: [{ title: 'Home', href: '/home', icon }] });
    expect(
      document.querySelector('.unl-navigation__icon-span-left img'),
    ).toHaveAttribute('src', icon);
    expect(
      document.querySelector('.unl-navigation__icon-span-right'),
    ).not.toBeInTheDocument();

    setup({
      ...props,
      links: [{ title: 'Home', href: '/home', icon, iconPosition: 'right' }],
    });
    expect(
      document.querySelector('.unl-navigation__icon-span-right img'),
    ).toHaveAttribute('src', icon);
  });

  it('hides a link when display is false', () => {
    setup({
      ...props,
      links: [
        { title: 'Hidden', href: '/hidden', display: false },
        ...props.links,
      ],
    });

    expect(links()).toHaveLength(props.links.length);
  });
});
