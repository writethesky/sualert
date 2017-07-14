var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: 'bundle.map'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['manifest'] // 指定公共 bundle 的名字。
        }),
        // new ExtractTextPlugin('styles.css'),
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};