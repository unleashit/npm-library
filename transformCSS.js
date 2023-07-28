#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');

function updateCase(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const matches = src.match(/\.(.*) {/gm);

  if (!matches) {
    return;
  }
  console.log(matches);
  let result = src;

  // eslint-disable-next-line no-restricted-syntax
  for (const identifier of matches) {
    // const camelCase = identifier.replace(/-([a-z])/g, (g) =>
    //   g[1].toUpperCase(),
    // );

    const selectors = identifier.split(' ');

    try {
      const identifierRegExp = new RegExp(
        // eslint-disable-next-line
        identifier.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
        'g',
      );
      result = result.replace(identifierRegExp, camelCase);
    } catch (e) {
      console.error(e);
    }
  }

  // fs.writeFileSync(filePath, result, 'utf8');
}

async function processCSS() {
  const [, , ...cssPaths] = process.argv;

  const cssFiles = cssPaths.reduce(
    (arr, path) => [...arr, ...glob.sync(path)],
    [],
  );
  console.log('Files:');
  console.log(cssFiles);
  await Promise.all(cssFiles.map(updateCase));
}

processCSS().then(() => {
  console.log('done');
});
