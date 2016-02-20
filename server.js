import express from 'express';
import path from 'path';
import compression from 'compression';
import fs from 'fs';
import { minify } from 'html-minifier';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import store from './store.js';



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

            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );
            res.send(buildPage(html))
        } else {
            res.status(404).send('Not Found')
        }
    })
});

function buildPage(innerHTML) {
    return minify(
        template.replace('<!--REACTAPP-->', innerHTML),
        {
            collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true
        }
    );
}


var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('Running on port' + PORT); // eslint-disable-line
})
