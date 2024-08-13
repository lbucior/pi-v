const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
