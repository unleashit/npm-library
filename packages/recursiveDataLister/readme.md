## Recursive Data Lister

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/recursive-data-lister.svg)](https://www.npmjs.com/package/@unleashit/recursive-data-lister)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/recursive-data-lister.svg)](https://bundlephobia.com/result?p=@unleashit/recursive-data-lister)

React component that recursively pretty prints nested lists or objects with various options for html markup and styling.

![recursive data lister component](https://github.com/unleashit/npm-library/raw/master/packages/recursiveDataLister/recursive-data-lister.png)

### Features

- Quickly display simple or complex nested lists and objects as html.
- Choice of html (ul, ol, div, etc.).
- Display as a single list or separate lists per first level parent.
- For arrays of objects, the option to choose a property to use its value as the heading (replace the numerical index).
- Handles dates. Either provide a formatter function, or by default will be displayed as strings. Also attempts to find and handle dates in string values.
- Basic default CSS available with easy customization through cssVars prop.

### Install

```
npm install @unleashit/recursive-data-lister
```

### Documentation

https://unleashit.github.io/npm-library/components/recursiveDataLister

### Demo

https://npm-library-demo.vercel.app/recursive-data-lister
