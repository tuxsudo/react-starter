import base from './webpack.base.babel.js';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {

    ...base,

    entry: path.resolve('./app/_server.js'),

    output: {
        filename: 'index.js',
        library: 'index.js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'server', 'modules', 'react-server-app')
    },

    target: 'node',

    externals: [ nodeExternals({
        whitelist: ['normalize.css']
    })],

    node: {
        __filename: true,
        __dirname: true
    }
}
