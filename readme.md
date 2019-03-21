## NPM and UI Component Library

Lerna + Yarn Workspaces monorepo of various UI components and NPM modules. Written with Typescript and tested with Jest.

Just getting going, so far we have...

1. [mock-data](https://github.com/unleashit/npm-library/tree/master/packages/mockData) - Typescript wrapper for [mock-data-generator](https://github.com/danibram/mocker-data-generator) to easily generate random data from a selection of templates or full custom schemas. Returns a JS object and/or a file in JSON format.
2. [React pagination](https://github.com/unleashit/npm-library/tree/master/packages/pagination) - responsive pagination component for React in Typescript. Just give it a total, current offset and handler and it returns the new offset as needed.
3. [React login component](https://github.com/unleashit/npm-library/tree/master/packages/login) - React login component in Typescript, Formik and Yup for validation. It accepts props including submit handlers, custom fields, custom Yup schema, custom header and more.
4. [React sign-up/registration component](https://github.com/unleashit/npm-library/tree/master/packages/signup) - React signup component in Typescript, Formik and Yup for validation. It accepts props including submit handlers, custom fields, custom Yup schema, custom header and more.
5. [React forgot password component](https://github.com/unleashit/npm-library/tree/master/packages/forgotPassword) - coming soon.
6. [React Help Desk](https://github.com/unleashit/npm-library) - coming soon

A [demo app](https://github.com/unleashit/npm-library/tree/master/packages/demos) is available for previewing the components. Will probably soon be removed in favor of Storybook.

### Use

1. Install individual components via NPM: see component.

2. Run the demo app (demos all components): `yarn start`

**Other commands**

Run all tests: `yarn test`

Run Storybook (WIP): `yarn run storybook`

Other scripts are available to build, publish to NPM, clean, etc.

### CSS

By default, components come with basic css styling generated with CSS Modules. If you want to use it, either copy it from node_modules/[package-name]/dist/style.css or if using webpack, import it like `import '@unleashit/[package-name]/dist/style.css'`;

Important: since the CSS Module based class names can change with package updates, you should only use the class names provided in BEM format (i.e. `unl-signup__input`) if you write you own styles or want to modify/override the default style. These will always stay the same. Do not create styles for the class names containing a hash unless you replace with your own as described below.

Since I'm a big fan of CSS modules over CSS-in-JS, a special workflow is provided. All React UI components accept an optional `cssModuleStyles` prop that will take your custom CSS module and override the default. You can target all of the component's internal classnames this way, as long as you name the styles correctly. To find the names (since they're missing in the compiled version), I recommend looking in the source files or scss folder for the component on Github. If anyone has any opinions or ideas to improve this, please let me know!
