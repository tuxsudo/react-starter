import base from './webpack.base.babel.js';
import path from 'path';
import webpack from 'webpack';

const {WDS_PORT, PORT, APP_WEB_BASE_PATH} = process.env;

export default {
    ...base,

    entry: {
        app: "./src/app/_client.js"
    },

    output: {
        path: path.join(__dirname, 'dist', 'client'),
        filename: '[name].js',
        publicPath: `${APP_WEB_BASE_PATH}/`
    },

    plugins: base.plugins
        .concat(process.env.NODE_ENV==="production"
            ? [
                new webpack.optimize.UglifyJsPlugin({
                    sourceMap: true,
                    compress: {
                        warnings: false,
                        screw_ie8: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true
                    },
                    output: {
                        comments: false
                    }
                }),

                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                })
            ]
            : []
        ),

    target: "web",

    externals: {
        react: "React",
        'react-dom': "ReactDOM"
    },

    devtool: "source-map",

    devServer: {
        compress: true,
        // contentBase: `http://localhost:${PORT}/static`,
        historyApiFallback: true,
        hot: true,
        // https: true,
        // progress: false,
        port: parseInt(WDS_PORT),
        proxy: {
            "**": `http://localhost:${PORT}`
        },
        publicPath: '/static/',
        // stats: 'verbose'
        stats: 'errors-only'
    }

};
