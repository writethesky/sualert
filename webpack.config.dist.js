var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


    entry: {
        app: './src/box/index.js',
    },
    output: {
        filename: 'sualert.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'sualert',
        libraryTarget: 'umd',
        sourceMapFilename: 'bundle.map'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]

    }
};