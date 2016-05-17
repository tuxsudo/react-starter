import base from './webpack.base.babel.js';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {

    ...base,

    entry: path.resolve('./src/server/index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "server.js",
        publicPath: '/static/'
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
