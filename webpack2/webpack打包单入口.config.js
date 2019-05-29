const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/1.js',
    output: {
      path: path.resolve(__dirname,'build'),
      filename: '1.min.js'
    },
}