## Forgot Password

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/forgot-password.svg)](https://www.npmjs.com/package/@unleashit/forgot-password)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/forgot-password.svg)](https://bundlephobia.com/result?p=@unleashit/forgot-password)

Customizable set of React forgot password components that validate against a default or custom Zod schema. Accepts custom fields and includes reset request, token submission and confirmation views as needed.

![forgot password component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/forgotPassword/forgotPassword.png)

### Features

- Displays and handles client and serverside errors
- Custom fields and schema
- Show success components and/or provide onSuccess functions to redirect, set state, etc.
- Custom header/footer
- Loader (default or custom)
- Show a link to login instead
- Client router support for links
- Toast support

### Install

```
npm install @unleashit/forgot-password
```

**Required peer dependencies:** react, react-hook-form, @hookform/resolvers and zod.

### Documentation

https://unleashit.github.io/npm-library/components/forgotPassword

### Demo

https://npm-library-demo.vercel.app/forgot-password
