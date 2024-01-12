## Navigation

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/navigation.svg)](https://www.npmjs.com/package/@unleashit/navigation)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/navigation.svg)](https://bundlephobia.com/result?p=@unleashit/navigation)

Customizable navigation component for React. Comes with optional sidecar component for login/login/signup.

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-horz.png)

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-horz-alt.png)

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-vert.png)

### Install

```
npm install @unleashit/navigation
```

**Required peer dependencies:** react.

### Example

```javascript
const links = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'About',
    href: '/about-us',
  },
  {
    title: 'Partner Site',
    href: 'https://example.com',
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
];

const NavigationDemo = () => (
  <Navigation
    links={links}
    // setting the isAuth prop displays
    // default login/logout/signup btns
    isAuth={false}
  />
);

export default NavigationDemo;
```

### Authenticated Links

You can manually manage the display state for each link with by adding a display property. Setting a display property will always override any managed link state the component does.

```javascript
links = [
  {
    title: 'Members Only',
    href: '/members',
    display: false, // boolean
  },
];
```

### Login/Logout/Signup Sidecar

If you set an `isAuth` and/or `authLinks` prop, the component will add a sub-component for authentication and signup links as appropriate. If `isAuth` is set to `false`, both login and signup will show up. If true, logout instead. This is useful for prototyping or the classic auth link style. If you need more custom behavior, you can achieve anything you like with normal links and the display property to show/hide.

If you need to customize the titles, urls or anything about the auth links (you probably do), add an `authLinks` prop. `authLinks` should be an object with `login`, `logout` and `signup` properties each containing a NavigationLink object (see `NavigationLink` below).

```javascript
const authLinks = {
  login: {
    title: 'Sign In',
    href: '/login',
  },
  logout: {
    title: 'Logout',
    href: '/logout',
  },
  signup: {
    title: 'Register',
    href: '/signup',
    icon: '/images/login-icon.svg',
    iconPosition: 'right', // left is default
  },
};

<Navigation
  links={links}
  authLinks={authLinks}
  isAuth={false}
  template="light-buttons"
/>;
```

If you add `authlinks`, including `isAuth` is optional it you choose to manage the individual display properties yourself like:

```javascript
const authLinks = {
  login: {
    display: !isLoggedIn,
    // you can leave off any props if you like the defaults
  },
  logout: {
    display: isLoggedIn,
  },
  signup: {
    display: false, // never display signup
  },
};
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/navigation/dist/navigation.css'`. CSS Module support is baked in. If you use CSS Modules you can `import styles from '@unleashit/navigation/dist/navigation.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModule` prop. Please see CSS in the main readme of the repo for more info.

### Themes

If you include the CSS, you can choose from a few basic themes by setting the `template` prop:

- `plain`: no style (same as not adding the CSS but it adds a class called `plain`)
- `clean`: clean style. This is the default
- `light-buttons`: light buttons style
- `dark-buttons`: dark buttons style

You can also set the direction to be `horizontal` or `vertical` with the `direction` prop. The themes are designed to work in either direction.

Lastly, you can optionally add an icon to each link by setting the `icon` and `iconPosition` props. If you're using the default CSS, you may or may not have to tweak it to get the right results.

### API and Props

```typescript
// main component props
export interface NavigationProps {
  links: NavigationLink[];
  linkComponent?: React.ComponentType<any>; // useful for routing
  linkComponentHrefAttr?: string; // set only if linkComponent requires a custom href attr (e.g. React Router Link uses 'to')
  direction?: 'horizontal' | 'vertical' | 'horz' | 'vert';
  template?: 'clean' | 'dark-buttons' | 'light-buttons' | 'none';
  isAuth?: boolean; // if set, adds default login, logout and sign up links
  authLinks?: AuthLinkTypes; // customize default authLinks (requires isAuth to be set)
  cssModule?: { [key: string]: string };
}

// NavigationLink contains all the possible props for a link (either normal link or authLink)
export interface NavigationLink {
  href: string; // not required for authLink
  title: string; // not required for authLink
  active?: boolean;
  classes?: string[];
  style?: React.CSSProperties;
  icon?: string; // path to image
  iconPosition?: 'left' | 'right';
  display?: boolean;
  attrs?: React.AllHTMLAttributes<any>; // key/val object with any extra html attributes
}

export interface AuthLinkTypes {
  login?: NavigationLink;
  logout?: NavigationLink;
  signup?: NavigationLink;
}
```

| Name                  | Type                      | Description                                                                                                                | default    |
| --------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| links                 | NavigationLink[]          | array of objects (links) each with a minimum of url and name props                                                         | required   |
| linkComponent         | React.ComponentType<any>  | optional component for link anchors (useful for Routers)                                                                   | undefined  |
| linkComponentHrefAttr | string                    | set only if linkComponent requires a custom href attr (e.g. React Router Link uses 'to')                                   | undefined  |
| direction             | horizontal or vertical    | adds css classes to nav container for horz and vert                                                                        | horizontal |
| template              | string                    | choice of theme if using the default CSS                                                                                   | clean      |
| isAuth                | boolean                   | if set, component will set appropriate state to login/logout/signup links                                                  | undefined  |
| authLinks             | AuthLinkTypes             | if set, these links will be added to the auth sidecar (a second ul within the nav container that can be styled separately) | undefined  |
| cssModule             | { [key: string]: string } | CSS Module object that optionally replaces default. Class names need to match expected names.                              | undefined  |
