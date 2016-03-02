import base from './webpack.base.babel.js';
import path from 'path';


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

    externals: [
        'html-minifier',
        'react-dom',
        'react',
        'react-router',
        'react-redux',
        'react-helmet'
    ],

    node: {
        __filename: true,
        __dirname: true
    }
}
