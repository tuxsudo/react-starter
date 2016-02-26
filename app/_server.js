import React from 'react';
import docTemplate from './HTML.js';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes.js';
import store from './store.js';
import { minify } from 'html-minifier';

export default (req, res, next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {

        if (err) {
            return next(err);

        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)

        } else if (props) {
            const content = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );
            res.send(
                minify(
                    docTemplate({ ...(Helmet.rewind()), content }),
                    { collapseWhitespace: true, removeComments: true, removeAttributeQuotes: true }
                )
            );
        } else {
            res.status(404).send('Not Found')
        }
    })
}
