const path = require("path");
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const { optimize: { CommonsChunkPlugin }, ProvidePlugin } = require('webpack')
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: { "main": "aurelia-bootstrapper" },

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
    },

    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"],
    },

    module: {
        rules: [
            // { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            {
                test: /.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
                            }
                        },
                        'sass-loader',
                        'import-glob-loader'
                    ]
                })
            },
            { test: /\.ts$/i, use: "awesome-typescript-loader" },
            { test: /\.html$/i, use: "html-loader" },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            }
        ]
    },

    plugins: [
        new AureliaPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
        })
    ],
};