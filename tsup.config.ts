import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/**/*.ts',
    ],
    format: [
        'cjs', 
        'esm'
    ],
    target: 'es2022',
    outDir: 'dist',
    clean: true,
    sourcemap: false,
    splitting: false,
    keepNames: true,
    treeshake: false,
    minify: true,
    bundle: false,
    dts: true,
    external: [
        'viem',
        'viem/accounts',
        'viem/chains'
    ],
    outExtension({ format }) {
        return {
            js: format === 'cjs' ? '.cjs' : '.mjs'
        }
    },
});
