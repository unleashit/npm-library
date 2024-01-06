---
title: Home
slug: /
sidebar_position: 1
---

# NPM and UI Component Library

NX and PNPM workspaces monorepo of various UI components, written with Typescript and tested with Jest. Individually installable as NPM modules.

Demo: https://npm-library-demo.vercel.app

### React Components

1. [Login](https://github.com/unleashit/npm-library/tree/master/packages/login) - customizable login component in Typescript that validates with a built-in or custom Yup schema. It accepts custom fields, header/footer, forgot password and social login buttons. Assumes Peer depenencies of React, React Hook Form and Zod.
2. [Sign-up/registration](https://github.com/unleashit/npm-library/tree/master/packages/signup) - customizable signup component in Typescript that validates with a built-in or custom Yup schema. It accepts custom fields, header/footer and social sign up buttons. Assumes Peer depenencies of React, React Hook Form and Zod.
3. [Forgot password](https://github.com/unleashit/npm-library/tree/master/packages/forgotPassword) - customizable set of forgot password components in Typescript that validate with a built-in or custom Yup schema. It accepts custom fields, custom header/footer and includes both reset request and actual reset views. Assumes Peer dependencies of React, React Hook Form and Zod.
4. [Quick Form](https://github.com/unleashit/npm-library/tree/master/packages/quickForm) - Form generator that can quickly produce any type of simple form. Defaults as a contact form. Assumes Peer dependencies of React, React Hook Form and Zod.
5. [Navigation](https://github.com/unleashit/npm-library/tree/master/packages/navigation) - customizable auth aware navigation component in Typescript with optional sidecar component for login/login/signup.
6. [Pagination](https://github.com/unleashit/npm-library/tree/master/packages/pagination) - responsive pagination component in Typescript. Just give it a total, current offset and handler and it returns the new offset when the user interacts. Assumes a peer dependency of React.
7. [Modal](https://github.com/unleashit/npm-library/tree/master/packages/modal) - customizable modal component in Typescript. Optional animation support when adding/removing from DOM. Assumes a peer dependency of React.
8. [Recursive Data Lister](https://github.com/unleashit/npm-library/tree/master/packages/recursiveDataLister) - component that outputs a nested object/array recursively with options such as choice of html and choice of leaf key for arrays of objects.
9. [Async Handler](https://github.com/unleashit/npm-library/tree/master/packages/asyncHandler) - HOC that takes an async function and returns views for loading, no-data and error states. It accepts an optional method to check a cache before the async function is run. **Note:** _this package has been deprecated and will be archived in the near future. [React Query](https://github.com/TanStack/query) is a more feature rich implementation based on React hooks._

### Other

A [demo app](https://github.com/unleashit/npm-library/tree/master/demos/frontend) is available for previewing the components that can be run in parallel with a [demo backend](https://github.com/unleashit/npm-library/tree/master/demos/backend) to test server functionality.

### How to Use

- Install the individual components via NPM. See each component.

- To run the demo app (including backend): `pnpm dev`

### CSS

By default, components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version.

:::tip BEM CSS
BEM css can be imported simply as `import '@unleashit/[package-name]/dist/[component-name].css'` (see each component's readme for exact path).
:::

Alternatively, you can manually copy it into your project.

If you are using CSS Modules, support is baked in. All React UI components accept an optional `cssModule` prop where you can pass in either a provided or a custom CSS module.

:::tip CSS Modules
CSS modules can be imported like: `import css from '@unleashit/[package-name]/dist/[component-name].module.css'` (see each component's readme for exact path).
:::

Note that the `*.module.css` convention allows for automatic module support in libraries like Create React App, Vite and Next.js. If you have a different setup, it might require some additional configuration.

There are a couple of ways to work with modules. First, simply import the full module and provide as `cssModules` prop. This will use the default style but provide better protection from namespace collision.

Second, you can target any of the component's internal classnames with your own module as long as you name the styles correctly. To find the right names, check out the component's `*.module.css` (keeping in mind that sometimes not all possible targets are utilized) or see the source code for all possible targets. Another option to check the markup in dev tools and translate the default BEM classnames from `unl-[component-name]__[style-name-with-dashes]` to `[styleNameCamelCase]` in your module.

If you want to combine some of the default style with your own, just import both modules then merge into a single object like:

```css title="login-overrides.css"
.button {
  background-color: green;
}
```

```typescript jsx title="LoginPage.jsx"
import Login from '@unleashit/login'
import defaultCSS from '@unleashit/login/dist/login.module.css';
import customCSS from './login-overrides.css';

const css = {
  ...defaultCSS,
  ...customCSS
}

export default function LoginPage() {
  return (
    <Login handler={/* ... */} cssModule={css} />
  )
}
```

Each component that uses CSS will output BEM class names by default. If a `cssModule` prop is passed in with matching classes, a hashed style class name will output for each match while non-provided (and matching) class names will remain BEM.

:::warning Tailwind or CSS-in-JS
If you're a Tailwind or CSS-in-JS user, you should repent. But if you insist on adding technical debt and spaghetti to your project, it makes sense that you wouldn't mind sprinkling in a little BEM css! That said, you can still make use of the cssModules prop if your library works with classes (e.g. Aphrodite).
:::
