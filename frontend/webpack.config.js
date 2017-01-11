const path = require('path');
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
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-maps'
};
