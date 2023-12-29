import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup = defineConfig(() => ({
  clean: true,
  splitting: true,
  bundle: true,
  treeshake: true,
  format: ['cjs', 'esm'],
  dts: true,
  minify: env === 'production',
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  target: 'es2020',
  sourcemap: false,
  // noExternal: ['lodash'],
  outDir: 'dist',
  entry: ['src/**/*.{ts,tsx}'], // include all files under src
}));

// export const tsup = defineConfig({
//   clean: env === 'production',
//   dts: true, // generate dts files
//   format: ['cjs', 'esm'], // generate cjs and esm files
//   entryPoints: ['src/index.ts'],
//   outDir: 'dist',
//   entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.*'],
//   bundle: false,
//   sourcemap: true,
// });
