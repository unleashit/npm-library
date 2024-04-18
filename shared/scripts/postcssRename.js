#!/usr/bin/env node

const fs = require('fs');
const { program } = require('commander');
const postcss = require('postcss');
const renamer = require('postcss-rename');

program
  .name('css-module-to-bem')
  .description(
    'Simple postcss utility to convert camel cased CSS modules to kebab cased BEM',
  )
  .version('0.0.1')
  .argument(
    '<string>',
    'Path to css module. File should be in *.module.css format',
  )
  .requiredOption(
    '-n, --name <string>',
    'Module name to prepend to class and id selectors',
  )
  .option(
    '-p, --prefix <string>',
    'Change the namespace prefix (default: unl-)',
  );

program.parse();

const { name, prefix = 'unl-' } = program.opts();
const [path] = program.args;

if (!fs.existsSync(path)) {
  console.error('Path to css module is invalid or missing');
  process.exit(1);
}

const newPath = path.replace(/\.module.css$/, '.css');

if (path === newPath) {
  console.error('File must follow CSS module naming convention: *.module.css');
  process.exit(1);
}

let cssFile;
try {
  cssFile = fs.readFileSync(path, 'utf-8');
} catch (err) {
  console.error(err);
  process.exit(1);
}

const camelToKebab = (str) =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const strategy = (selector) => `${camelToKebab(selector)}`;

// transform :global(.selector) to .selector
// return convertedCase.replace(/:global\((.+)\)/gm, ' $1');

async function main() {
  return await postcss([
    renamer({
      strategy,
      ids: true,
      prefix: `${prefix}${name}__`,
    }),
  ]).process(cssFile, { from: undefined });
}

main().then((o) => {
  fs.writeFileSync(newPath, o.css);
});
