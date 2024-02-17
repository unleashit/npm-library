## Pagination

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/pagination.svg)](https://www.npmjs.com/package/@unleashit/pagination)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/pagination.svg)](https://bundlephobia.com/result?p=@unleashit/pagination)

Responsive pagination component for React. Just give it a total number of items and the current offset. It then calls a handler with the new offset as needed.

![pagination component](https://github.com/unleashit/npm-library/raw/master/packages/pagination/pagination.png)

## Features

- Lightweight UI component. Doesn't care about data, caching or state. Send it the total items and current offset, and it renders the correct interface.
- Responsive, with a container query to show the right amount of pages
- Gracefully supports unlimited pages
- Automatically hides next/prev buttons when not needed
- Customizable labels
- Default CSS with light/dark mode available
- CSS module support can override internal styles with a custom module

### Install

```bash
npm install @unleashit/pagination
```

### Documentation

https://unleashit.github.io/npm-library/components/pagination

### Demo

https://npm-library-demo.vercel.app/pagination
