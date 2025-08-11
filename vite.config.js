const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const svgr = require('vite-plugin-svgr').default;

module.exports = defineConfig({
  plugins: [react(), svgr()],
});
