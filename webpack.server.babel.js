import base from './webpack.base.babel.js';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const {APP_WEB_BASE_PATH} = process.env;

export default {

    ...base,

    entry: './src/server/index.js',

    output: {
        path: path.join(__dirname, 'dist', 'server'),
        filename: "server.js",
        publicPath: `${APP_WEB_BASE_PATH}/`
    },

    externals: [ nodeExternals({
        whitelist: ['normalize.css']
    })],

    target: 'node',

    node: {
        __filename: false,
        __dirname: false
    }
}
