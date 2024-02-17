### Quick Form

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/quick-form.svg)](https://www.npmjs.com/package/@unleashit/quick-form)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/quick-form.svg)](https://bundlephobia.com/result?p=@unleashit/quick-form)

Quick Form is a form builder that lets you crank out simple forms fast. It's a wrapper for React Hook Form that handles much of the manual setup while still providing enough customization for typical needs. It produces the form based on a configuration, handles both client and server\* validation and comes with basic styling.

\* When no config or schema are provided, Quick Form defaults as a standard contact form.

![quick form](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/quickForm/quick-form.png)

### Features

- Simple form builder. Contact form by default.
- Custom fields: input, checkbox, textarea and select (more will be added)
- Validation with Zod schemas
- Handles server validation errors (response must be expected type)
- Shows a success component on success and/or fires your onSuccess() function
- Toast support
- Error handling
- Custom header and footer
- Shows a default or custom loader
- Basic CSS provided in both namespaced BEM and CSS module formats
- Unique CSS module support: can provide your own css module styles to internal components without having to write global CSS.
- Typescript

### Install

```
npm install @unleashit/quick-form
```

**Required peer dependencies:** react, react-hook-form, @hookform/resolvers and zod.

### Documentation

https://unleashit.github.io/npm-library/components/quickForm

### Demo

https://npm-library-demo.vercel.app/quick-form
