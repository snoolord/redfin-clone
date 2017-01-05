const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: '../server/static',
    filename: 'bundle.js'
  },
  resolve: {
     alias: {
            'react': 'inferno-compat',
            'react-dom': 'inferno-compat'
        },
     extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /.node$/,
        loader: 'node-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
      }
   }),
   "module-resolver", {
            "root": ["."],
            "alias": {
                "react": "inferno-compat",
                "react-dom": "inferno-compat"
            }
        }
  ]
};
