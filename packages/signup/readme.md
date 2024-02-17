## Signup

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/signup.svg)](https://www.npmjs.com/package/@unleashit/signup)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/signup.svg)](https://bundlephobia.com/result?p=@unleashit/signup)

Customizable React signup component that validates against a default or custom Zod schema.

![signup component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/signup/signup.png)

### Features

- Displays and handles client and serverside errors
- Custom fields and schema
- Show a success component and/or provide an onSuccess function to redirect, set state, etc.
- Show social logins either above or below email signup with optional separator
- Custom header/footer
- Loader (default or custom)
- Show a link to login
- Client router support for links
- Toast support

### Install

```
npm install @unleashit/signup
```

**Required peer dependencies:** react, react-hook-form, @hookform/resolvers and zod.

### Documentation

https://unleashit.github.io/npm-library/components/signup

### Demo

https://npm-library-demo.vercel.app/signup
