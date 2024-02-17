## Login

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/login.svg)](https://www.npmjs.com/package/@unleashit/login)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/login.svg)](https://bundlephobia.com/result?p=@unleashit/login)

Customizable React login component that validates against a default or custom Zod schema.

![login component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/login/login.png)

### Features

- Displays and handles client and serverside errors
- Custom fields and schema
- Show a success component and/or provide an onSuccess function to redirect, set state, etc.
- Show social logins either above or below email login with optional separator
- Custom header/footer
- Loader (default or custom)
- Show a link to registration
- Show a forgot password link
- Client router support for links
- Toast support

### Install

```
npm install @unleashit/login
```

**Peer dependencies:** react, react-hook-form, @hookform/resolvers and zod.

### Documentation

https://unleashit.github.io/npm-library/components/login

### Demo

https://npm-library-demo.vercel.app/login
