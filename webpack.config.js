var cssnano = require('cssnano');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss =  require('precss');


module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
                    "sass-loader"
                )
                // loaders : [
                //     'style-loader',
                //     'css-loader',
                //     'postcss-loader'
                //     // 'sass-loader'
                // ]
            },

            {
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/,
                loader  : 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }

        ]

    },

    plugins: [
        new ExtractTextPlugin("styles-out.css")
    ],

    // autoprefixer: {
    //     browsers : ['last 2 versions']
    // }

    cssLoader: {
        modules: true
    },

    postcss : [

        precss(),

        cssnano({
            autoprefixer : {
                add      : true,
                remove   : true,
                browsers : ['last 2 versions']
            },

            discardComments : {
                removeAll : true
            }

        })
    ],

    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        compress: true
    },

    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }

};
