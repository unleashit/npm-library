import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup = defineConfig({
  splitting: true,
  clean: env === 'production', // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: env === 'production',
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  target: 'es2020',
  sourcemap: env !== 'production',
  outDir: 'dist',
  entry: ['src/**/*.{ts,tsx}'], // include all files under src
});
