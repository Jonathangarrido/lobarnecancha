var path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: path.resolve(__dirname, 'src') + '/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader' 
        loader: 'style-loader!css-loader!postcss-loader!sass-loader' 
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    inline: true
  },
};