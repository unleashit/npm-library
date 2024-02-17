## NPM and React Component Library

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)

Collection of React components written with Typescript and individually installable with npm.

### Documentation

https://unleashit.github.io/npm-library

### Demo

https://npm-library-demo.vercel.app

### FORMS

Not just dumb components, these offer out of the box functionality to handle both client and server validations, custom fields, success messages and more. Aside from React, required peer dependencies are `react-hook-form`, `@hookform/resolvers` and `zod`.

**Authentication Suite**

- [Login](https://github.com/unleashit/npm-library/tree/master/packages/login) - customizable, responsive login component with server support that validates against a default or custom Zod schema.
- [Sign-up/registration](https://github.com/unleashit/npm-library/tree/master/packages/signup) - customizable, responsive signup component with server support that validates against a default or custom Zod schema.
- [Forgot password](https://github.com/unleashit/npm-library/tree/master/packages/forgotPassword) - customizable, responsive set of forgot password components with server support that validate against a default or custom Zod schema.

**Simple custom forms builder**

- [Quick Form](https://github.com/unleashit/npm-library/tree/master/packages/quickForm) - form generator that can quickly produce simple React forms with validation and server support. By default, it is a Contact form.

### UI WIDGETS

- [Navigation](https://github.com/unleashit/npm-library/tree/master/packages/navigation) - customizable, responsive navigation component. Supports auth states and comes with an optional sidecar component for login/logout/signup.
- [Pagination](https://github.com/unleashit/npm-library/tree/master/packages/pagination) - sexy and responsive pagination component for React.
- [Modal](https://github.com/unleashit/npm-library/tree/master/packages/modal) - customizable, responsive, portal free modal component. Optional animation state support when adding/removing from DOM.

### OTHER

- [Recursive Data Lister](https://github.com/unleashit/npm-library/tree/master/packages/recursiveDataLister) - component that recursively pretty prints nested lists or objects with various options for html markup and styling.
- [Async Handler](https://github.com/unleashit/npm-library/tree/master/packages/asyncHandler) - HOC that takes an async function and returns views for loading, no-data and error states. It accepts an optional method to check a cache before the async function is run. **Note:** this package has been deprecated and will be archived in the near future. [React Query](https://github.com/TanStack/query) is a more feature rich implementation based on React hooks.
- [demo app](https://github.com/unleashit/npm-library/tree/master/demos/frontend) is available for previewing the components that can be run in parallel with a [demo backend](https://github.com/unleashit/npm-library/tree/master/demos/backend) to demonstrate server functionality.

### Common Features

- Customizable with uniform APIs
- Default CSS with CSS module support that can override internal classes.
- `cssVars` prop can override any CSS vars without touching CSS.
- Light/Dark Modes.
- Forms support custom fields
- Common package greatly reduces individual package sizes.

### How to Use

- Install the individual components via npm. See each component.
- To develop (also runs a component demo in the background): `pnpm dev`

[//]: #
[//]: # '### CSS Custom Properties'
[//]: #
[//]: # "For quick and easy theming, all components accept a `cssVars` prop. Assuming you have imported the css using one of the methods in the CSS section below, you can use `cssVars` to override any of the component's css variables. Here's an example:"
[//]: #
[//]: # '```tsx'
[//]: # '// Note: for a proper example of Modal, see the docs.'
[//]: # '// This just shows how to add css property overrides.'
[//]: #
[//]: # 'const cssVars = {'
[//]: # "  lightModeBackgroundColor: '#dddddd',"
[//]: # "  modalYPosition: '3rem', // default is vertically centered in the viewport"
[//]: # '};'
[//]: #
[//]: # '// keys should equal the css custom property name in camel case, minus the unl- prefix'
[//]: #
[//]: # '<Modal isOpen={isOpen} cssVars={cssVars}>'
[//]: # '  Welcome to our website!'
[//]: # '</Modal>;'
[//]: # '```'
[//]: #
[//]: # '> If you are using Typescript, Intellisense can give you the list of possible variables. Without TS, you find them by inspecting the parent element in browser dev tools.'
[//]: #
[//]: # '### Dark Mode'
[//]: #
[//]: # 'All components except recursive-data-lister and async-handler support dark mode. However, `prefers-color-scheme` is not queried so it is up to you to manually set the `darkMode` (boolean) prop. This is to give you the flexibility to integrate it with for example a light/dark switch, or however else you like.'
[//]: #
[//]: # "> css custom properties each have light and dark mode versions. Don't forget to style both when overriding."
[//]: #
[//]: # '### CSS'
[//]: #
[//]: # 'By default, all components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version.'
[//]: #
[//]: # "To use the standard version, import it like `import @unleashit/[package-name]/dist/[component-name].css` (see each component's readme for exact path). Alternatively you can copy it into your project if your build process doesn't support importing css."
[//]: #
[//]: # 'Or if you are using CSS Modules, all of the UI components accept an optional `cssModule` prop where you can pass in either the provided or a custom CSS module. The provided version can be imported like `import css from @unleashit/[package-name]/dist/[component-name].module.css` (the `*.module.css` convention allows for automatic CSS Module support in most React frameworks).'
[//]: #
[//]: # "Using the `cssModule` prop and your own modules, you can target any of the component's internal classnames as long as you name the styles correctly. To find the right names, check out the component's `*.module.css` (keeping in mind that sometimes not all possible targets are utilized) or the source code. Another option is to simply look at the markup in dev tools and translate the default BEM classnames like `unl-[component-name]__[style-name-with-dashes]` to `[styleNameCamelCase]` in your module."
[//]: #
[//]: # 'You could also easily use the default styles as a base, then override only certain styles like:'
[//]: #
[//]: # '```tsx'
[//]: # "import defaultCSS from '@unleashit/login/dist/login.module.css';"
[//]: # "import overrides from './styles/login-overrides.module.css';"
[//]: #
[//]: # 'const cssModule = {'
[//]: # '  ...defaultCSS,'
[//]: # '  ...overrides,'
[//]: # '};'
[//]: #
[//]: # 'const MyLogin = () => <Login handler={/* ... */} cssModule={cssModule} />;'
[//]: # '```'
[//]: #
[//]: # 'Each component that uses CSS will output BEM class names by default. If a `cssModule` prop is passed in with matching classes, a hashed style class name will output for each match while non-provided class names will remain BEM.'
[//]: #
[//]: # '#### Tailwind or CSS-in-JS'
[//]: #
[//]: # 'If you are using either of these abominations in a web application you should repent. But if you insist on adding technical debt and spaghetti to your project, you should still be able to make use of the `cssModule` prop if your library works with classes (e.g. Aphrodite or Tailwind). In that case, the key would be the camel cased class to target and the value would be a standard className string.'
