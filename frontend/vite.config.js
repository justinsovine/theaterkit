import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader'

const projectRootDir = resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        svgLoader(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: resolve(projectRootDir, 'src'),
                },
            ],
        }),
    ],
});
