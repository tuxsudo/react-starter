const glob = require('glob');
const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry: glob.sync('./src/**/*.spec.js'),

    target: "node",

    output: {
        path: path.join('dist', 'tests'),
        filename: "test.js"
    },

    module: {
        loaders: [
            {
                test : /\.js?$/,
                loader  : 'babel'
            },

            {
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]",
                    "postcss-loader"
                )
            },

            {
                test : /\.json$/,
                loader  : 'json'
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "null-loader?name=static/assets/[name]-[hash:2].[ext]"
            }

        ]

    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    externals: [ nodeExternals({
        whitelist: [
            "react-lazy-component",
            "in-stalk",
            /^dom-emit.*/,
            "polyfill-custom-event",
            /^@tuxsudo.*/
        ]
    })],

    node: {
        __filename: false,
        __dirname: false
    },

    cssLoader: {
        modules: true
    },

    postcss : [
        cssimport({ path: process.cwd() }),
        cssnext()
    ]
}
