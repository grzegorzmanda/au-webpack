const path = require("path");
const webpack = require("webpack");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

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
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
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
    ],
};