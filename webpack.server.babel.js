import base from './webpack.base.babel.js';
import path from 'path';

const {APP_WEB_BASE_PATH} = process.env;

export default {

    ...base,

    entry: path.resolve('./src/server/index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "server.js",
        publicPath: `${APP_WEB_BASE_PATH}/`
    },

    externals: [
        "better-npm-run",
        "compression",
        "cors",
        "dotenv",
        "express",
        "helmet",
        "html-minifier",
        "is-in-browser",
        "isomorphic-fetch",
        "join-classnames",
        "npm-run-all",
        "react",
        "react-dom",
        "react-helmet",
        "react-redux",
        "react-router",
        "redux",
        "redux-thunk",
        "string-hash"
    ].reduce((obj, name) => ({...obj, [name]: `commonjs ${name}`})),

    target: 'node',

    node: {
        __filename: false,
        __dirname: false
    }
}
