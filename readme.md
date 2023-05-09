## NPM and UI Component Library

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)

NX and PNPM workspaces monorepo of various UI components and installable NPM modules. Written with Typescript and tested with Jest.

### React Components

1. [Login](https://github.com/unleashit/npm-library/tree/master/packages/login) - customizable login component in Typescript that validates with a built-in or custom Yup schema. It accepts custom fields, header/footer, forgot password and social login buttons. Assumes Peer depenencies of React, Formik and Yup.
2. [Sign-up/registration](https://github.com/unleashit/npm-library/tree/master/packages/signup) - customizable signup component in Typescript that validates with a built-in or custom Yup schema. It accepts custom fields, header/footer and social sign up buttons. Assumes Peer depenencies of React, Formik and Yup.
3. [Forgot password](https://github.com/unleashit/npm-library/tree/master/packages/forgotPassword) - customizable set of forgot password components in Typescript that validate with a built-in or custom Yup schema. It accepts custom fields, custom header/footer and includes both reset request and actual reset views. Assumes Peer depenencies of React, Formik and Yup.
4. [Navigation](https://github.com/unleashit/npm-library/tree/master/packages/navigation) - customizable auth aware navigation component in Typescript with optional sidecar component for login/login/signup.
5. [Pagination](https://github.com/unleashit/npm-library/tree/master/packages/pagination) - responsive pagination component in Typescript. Just give it a total, current offset and handler and it returns the new offset when the user interacts. Assumes a peer dependency of React.
6. [Modal](https://github.com/unleashit/npm-library/tree/master/packages/modal) - customizable modal component in Typescript. Optional animation support when adding/removing from DOM. Assumes a peer dependency of React.
7. [Async Handler](https://github.com/unleashit/npm-library/tree/master/packages/asyncHandler) - HOC that takes an async function and returns views for loading, no-data and error states. It accepts an optional method to check a cache before the async function is run.
8. [Recursive Data Lister](https://github.com/unleashit/npm-library/tree/master/packages/recursiveDataLister) - component that outputs a nested object/array recursively with options such as choice of html and choice of leaf key for arrays of objects.

### Other

1. [mock-data](https://github.com/unleashit/npm-library/tree/master/packages/mockData) - Typescript wrapper for [mocker-data-generator](https://github.com/danibram/mocker-data-generator) to easily generate random data from a selection of templates or full custom schemas. Returns a JS object and/or a file in JSON format.

A [demo app](https://github.com/unleashit/npm-library/tree/master/packages/demos) is available for previewing the components.

### How to Use

- Install the individual components via NPM. See each component.

- To run the demo app (demos all components): `pnpm demo`

**Other commands**

Run the demo plus all components in dev mode `pnpm dev`.

Run tests: `pnpm build && pnpm test`.

### CSS

By default, components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version.

To use the standard version, either import it from `@unleashit/[package-name]/dist/[component-name].css` (see each component's readme for exact path) or copy it into your project.

Support for CSS modules is baked in. All React UI components accept an optional `cssModule` prop where you can pass in either a provided or a custom CSS module. The provided version, same as the BEM but with short/camel cased names, can be imported like `@unleashit/[package-name]/dist/[component-name].module.css` (the `*.module.css` convention allows for CSS Module support in create-react-app).

Using the `cssModules` prop and your own modules, you can target any of the component's internal classnames as long as you name the styles correctly. To find the right names, check out the component's `*.module.css` (keeping in mind that sometimes not all possible targets are utilized) or the source code. Another option is to simply look at the markup in dev tools and translate the default BEM classnames like `unl-[component-name]__[style-name-with-dashes]` to `[styleNameCamelCase]` in your module.

Each component that uses CSS will output BEM class names by default. If a `cssModule` prop is passed in with matching classes, a hashed style class name will output for each match while non-provided (and matching) class names will remain BEM.

If anyone has likes this novel way to provide CSS with a library, or have any ideas to improve it please let me know. If you're a Tailwind or CSS-in-JS user, you should repent. But if you insist on adding technical debt and spaghetti to your project, feel free! You might skill be able to make use of the cssModules prop if your library works with classes (e.g. Aphrodite).
