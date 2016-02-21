import express from 'express';
import path from 'path';
import compression from 'compression';
import fs from 'fs';
import { minify } from 'html-minifier';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';
import routes from '../app/routes';
import store from '../app/store.js';


export const app = express();

const template = fs.readFileSync(path.join(__dirname, 'public', 'index.html')).toString();

app.use(compression())

app.use(express.static(path.join(__dirname, 'public'), {index: false}));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {

        if (err) {
            res.status(500).send(err.message)

        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)

        } else if (props) {
            const content = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );
            res.send(buildPage({ ...(Helmet.rewind()), content }))
        } else {
            res.status(404).send('Not Found')
        }
    })
});

function buildPage({content="", title="", meta="", links=""}={}) {
    return minify(
        template
            .replace('<!--STUB_TITLE-->', title)
            .replace('<!--STUB_META-->', meta)
            .replace('<!--STUB_LINKS-->', links)
            .replace('<!--STUB_APP-->', content),
        {
            collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true
        }
    );
}


var PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
