import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup = defineConfig({
  clean: env === 'production', // clean up the dist folder
  splitting: true,
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  treeshake: true,
  minify: env === 'production',
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  target: 'es2020',
  sourcemap: env !== 'production',
  outDir: 'dist',
  entry: ['src/**/*.{ts,tsx}'], // include all files under src
});
