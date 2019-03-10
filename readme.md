## NPM and UI Component Library

Lerna + Yarn Workspaces monorepo of various UI components and NPM modules. Written with Typescript and tested with Jest.

Just getting going, so far we have...

1. [mock-data](https://github.com/unleashit/npm-library/tree/master/packages/mockData) - Typescript wrapper for [mock-data-generator](https://github.com/danibram/mocker-data-generator) to easily generate random data from a selection of templates or full custom schemas. Returns a JS object and/or a file in JSON format.
2. [React pagination](https://github.com/unleashit/npm-library/tree/master/packages/pagination) - responsive pagination component for React in Typescript. Just give it a total, current offset and handler and it returns the new offset as needed.
3. [React login component](https://github.com/unleashit/npm-library/tree/master/packages/login) - React login component in Typescript, Formik and Yup for validation. It accepts props including submit handlers, custom fields, custom Yup schema, custom header and more. Basic CSS is available.
4. [React sign-up/registration component](https://github.com/unleashit/npm-library/tree/master/packages/signup) - React signup component in Typescript, Formik and Yup for validation. It accepts props including submit handlers, custom fields, custom Yup schema, custom header and more. Basic CSS is available.
5. [React Help Desk](https://github.com/unleashit/npm-library) - coming soon

A [demo app](https://github.com/unleashit/npm-library/tree/master/packages/demos) is available for previewing the components. Will probably soon be removed in favor of Storybook.

### Use

1. Install individual components via NPM: see component.

2. Run the demo app (demos all components): `yarn start`

##### Other commands

Run all tests: `yarn test`

Run Storybook (WIP): `yarn storybook`

Other scripts are available to build, publish to NPM, clean, etc.
