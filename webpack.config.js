const path = require("path");
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const { optimize: { CommonsChunkPlugin }, ProvidePlugin } = require('webpack')

const srcDir = path.resolve(__dirname, 'src');
const outputDir = path.resolve(__dirname, 'dist');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

const cssRules = [
    "style-loader",
    "css-loader",
    { loader: "postcss-loader", options: { plugins: [autoprefixer({ browsers: ['last 2 versions'] })] } },
    "sass-loader",
    "import-glob-loader"
];

module.exports = {
    entry: { "main": "aurelia-bootstrapper" },

    output: {
        path: outputDir,
        publicPath: "dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
    },

    resolve: {
        extensions: [".ts", ".js"],
        modules: [srcDir, "node_modules"],
    },

    module: {
        rules: [
            { test: /\.scss$/i, use: cssRules },
            { test: /\.html$/i, use: "html-loader" },
            { test: /\.ts$/i, use: "awesome-typescript-loader", exclude: nodeModulesDir },
            { test: /\.json$/i, loader: 'json-loader' },
            { test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
            { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
        ]
    },

    plugins: [
        new AureliaPlugin(),
        new ProvidePlugin({
            'Promise': 'bluebird'
        }),
        new CopyWebpackPlugin([
            { from: 'static/favicon.ico', to: 'favicon.ico' }
        ])
    ],
};