import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';
import documentBuilder from './document-builder.js';
import routes from '../../app/routes';
import store from '../../app/store.js';


export default (req, res) => {
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
            res.send(documentBuilder({ ...(Helmet.rewind()), content }))
        } else {
            res.status(404).send('Not Found')
        }
    })
}
