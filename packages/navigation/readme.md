## Navigation

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/navigation.svg)](https://www.npmjs.com/package/@unleashit/navigation)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/navigation.svg)](https://bundlephobia.com/result?p=@unleashit/navigation)

Customizable navigation component for React. Comes with optional sidecar component for login/logout/signup.

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-horz.png)

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-horz-alt.png)

![navigation component screenshot](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/navigation/navigation-vert.png)

### Features

- Lightweight UI component. Send it a list of links and options, and it will render the html.
- Horizontal or Vertical display.
- Can independently control display state of each link.
- Optional login/logout/signup sidecar can be positioned independently from main links.
- Auth sidecar has typical defaults, but customizable.
- Accepts custom attributes per link.
- Several CSS themes to choose, or make your own.
- CSS module support can override internal styles with a custom module.

### Install

```bash
npm install @unleashit/navigation
```

**Peer dependency:** react.

### Example without auth links

```tsx
const links: NavigationLink[] = [
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

const NavigationDemo = () => <Navigation links={links} />;

export default NavigationDemo;
```

### Authenticated Links

You can manually manage the display state for each link with by adding a display property. Setting a display property will always override any managed link state the component does.

```tsx
const links: NavigationLink[] = [
  {
    title: 'Members Only',
    href: '/members',
    display: isLoggedIn && isMember, // boolean
  },
];
```

### Login/Logout/Signup Sidecar

If you include an `isAuth` and/or `authLinks` prop, a sub-component with appear with authentication and signup links as appropriate. Use `isAuth` if you have a simple prototype with standard login/logout/signup behavior. `authLinks` is a customized version. Lastly if you prefer, you can integrate your auth buttons directly into the primary links using the display property to individually show/hide.

If `isAuth` is included and set to `false`, both **login** and **signup** will show up. If true, **logout** instead.

If you need to customize the titles, urls or anything about the auth links (you probably do), an `authLinks` prop is required. `authLinks` should be an object with `login`, `logout` and `signup` properties each containing a `NavigationLink` object (see `NavigationLink` below).

```tsx
interface AuthLinkTypes {
  login?: NavigationLink;
  logout?: NavigationLink;
  signup?: NavigationLink;
}

const authLinks: AuthLinkTypes = {
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

Note: If you add `authlinks`, including `isAuth` is optional. Including it is a simple way to control display state, but you can also choose to manage individually per link if you prefer:

```tsx
const authLinks: AuthLinkTypes = {
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

### Custom colors

It's recommended that you override the css variables directly if you want to do anything fancy, but for simple color changes you can provide a `colors` prop:

```typescript
interface Colors {
  light?: CSSProperties['color']; // base color for light btns template
  lightDarker5?: CSSProperties['color'];
  lightDarker10?: CSSProperties['color'];
  lightDarker15?: CSSProperties['color'];
  dark?: CSSProperties['color']; // base color for dark btns template
  darkLighter5?: CSSProperties['color'];
  darkLighter10?: CSSProperties['color'];
  darkLighter15?: CSSProperties['color'];
  textLight?: CSSProperties['color']; // default white
  textDark?: CSSProperties['color']; // default black
}
```

Each key set to `colors` will override a css variable. For example, if you set `colors={{textDark: 'charcoal'}}`, it will override `--unl-navigation-text-dark` with `charcoal` (`#000000` is the default).

### API and Props

```typescript
// main component props
interface NavigationProps {
  links: NavigationLink[];
  linkComponent?: React.ComponentType<any>; // useful for client side routing
  linkComponentHrefAttr?: string; // set only if linkComponent requires a
  // custom href attr (e.g. React Router Link uses 'to')
  direction?: 'horizontal' | 'vertical' | 'horz' | 'vert';
  template?: 'clean' | 'dark-buttons' | 'light-buttons' | 'none';
  colors?: Colors; // see colors above for type
  classes?: string[]; // optional classes to be added nav elem
  isAuth?: boolean; // if set, adds default login, logout and sign up links
  authLinks?: AuthLinkTypes; // customize default authLinks (requires isAuth to be set)
  cssModule?: Record<string, string>;
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

| Name                  | Type                     | Description                                                                                                                | default    |
| --------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| links                 | NavigationLink[]         | array of objects (links) each with a minimum of url and name props                                                         | required   |
| linkComponent         | React.ComponentType<any> | optional component for link anchors (useful for Routers)                                                                   | undefined  |
| linkComponentHrefAttr | string                   | set only if linkComponent requires a custom href attr (e.g. React Router Link uses 'to')                                   | undefined  |
| direction             | horizontal or vertical   | adds css classes to nav container for horz and vert                                                                        | horizontal |
| template              | string                   | choice of theme if using the default CSS                                                                                   | clean      |
| colors                | object                   | optional object of colors to override css custom properties                                                                | undefined  |
| classes               | array                    | optional array of classes to add to nav element                                                                            | undefined  |
| isAuth                | boolean                  | if set, component will set appropriate state to login/logout/signup links                                                  | undefined  |
| authLinks             | AuthLinkTypes            | if set, these links will be added to the auth sidecar (a second ul within the nav container that can be styled separately) | undefined  |
| cssModule             | Record<string, string>   | CSS Module object that optionally replaces default. Class names need to match expected names.                              | undefined  |
