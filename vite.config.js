const {createVuePlugin} = require('vite-plugin-vue2')
const {resolve} = require('path')

module.exports = {
  plugins: [createVuePlugin(/*options*/)],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'nested/home/home.html'),
      }
    }
  }
}
