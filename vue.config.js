const { defineConfig } = require('@vue/cli-service')
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
}
module.exports = defineConfig({
  transpileDependencies: true
})
