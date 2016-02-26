import base from './webpack.base.babel.js';
import fs from 'fs';
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

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
        .concat([
            'react-dom/server'
        ])
        .filter( s=> !/\.css$/.test(s) )
        .reduce( (ext, mod) => ({
                ...ext,
                [mod]: 'commonjs ' + mod
            }), {}),

    node: {
        __filename: true,
        __dirname: true
    }
}
