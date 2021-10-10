const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    }
};