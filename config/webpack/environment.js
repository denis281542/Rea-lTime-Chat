const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide', 
  new webpack.ProvidePlugin({
    $: 'jquery/scr/jquery',
    jQuery: 'jquery/scr/jquery'
  })
)

module.exports = environment
