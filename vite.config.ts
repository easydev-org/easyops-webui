import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'node:path'

// Embedded in the easyops binary and served at /ui/ (see cmd/easyops/ui.go).
// The ops.v1 Connect API is same-origin (/easyops.v1.OpsService/*).
//
// This repo is the standalone source; by default it builds into ./dist. Set
// OUT_DIR to build straight into the easyops server's go:embed directory:
//   OUT_DIR=../easyops/cmd/easyops/ui/dist npm run build
const outDir = process.env.OUT_DIR || 'dist'

export default defineConfig({
  base: '/ui/',
  plugins: [tailwindcss(), svelte()],
  resolve: { alias: { $lib: path.resolve('./src/lib') } },
  build: { outDir, emptyOutDir: true, target: 'es2022' },
})
