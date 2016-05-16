import base from './webpack.base.babel.js';
import path from 'path';
import webpack from 'webpack';

export default {
    ...base,

    entry: "./src/app/_client.js",
    output: {
        path: path.join(__dirname, 'dist', 'static'),
        filename: "app.js"
    },

    plugins: base.plugins
        .concat(process.env.NODE_ENV==="production"
            ? [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compressor: {
                        warnings: false
                    }
                })
            ]
            : []
        ),

    devServer: {
        contentBase: path.join(__dirname, 'src', 'server', 'static'),
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: false,
        stats: 'errors-only',
        compress: true
    }

};
