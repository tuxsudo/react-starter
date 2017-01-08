import 'dotenv/config';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

export default {

    resolve: {

        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],

        extensions: [
            ".js",
            ".jsx",
            ".json",
            ".css",
            ".png",
            ".jpeg",
            ".jpg",
            ".gif",
            ".svg",
            ".mp3",
            ".mpeg",
            ".mpg"
        ]
    },

    module: {
        rules: [
            {
                test: /\.css$/,

                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            // until webpack2 ready:
                            // https://github.com/webpack/extract-text-webpack-plugin/issues/281
                            query: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[local]-[hash:base64:5]",
                                minimize: process.env.NODE_ENV==="production"  // check this format...
                            }
                        },

                        'postcss-loader'

                    ]
                })
            },

            {
                test : /\.js$/,
                use: 'babel-loader'
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "files/[name]-[hash:2].[ext]",
                        publicPath: "static/"
                    }
                }
            }

        ]

    },

    // stats: false.

    plugins: [
        new ExtractTextPlugin({ filename: "app.css", disable: false, allChunks: true }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV||"production"}"`
        })
    ]



};
