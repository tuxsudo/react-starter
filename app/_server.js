import React from 'react';
import docTemplate from './HTML.js';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes.js';
import getStore from './store.js';
import { minify } from 'html-minifier';


function resolveAsyncDeps(store, props) {

    const promises = props.components
        // unwrap component if wrapped by react-redux bindings...
        .map(component => component.WrappedComponent || component)

        // grab only components with a static `load` method
        .filter(component => component.load)

        // execute load functions -- they should return a Promise
        .map(component => component.load(store, props));

    return Promise.all(promises);
}


export default (req, res, next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {

        if (err) {
            return next(err);

        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)

        } else if (props) {
            const store = getStore();

            resolveAsyncDeps(store, props)
                .then(() => {
                    const initialState = store.getState();

                    const content = renderToString(
                        <Provider store={store}>
                            <RouterContext {...props} />
                        </Provider>
                    );

                    res.send(
                        minify(
                            docTemplate({ ...(Helmet.rewind()), content, initialState }),
                            { collapseWhitespace: true, removeComments: true, removeAttributeQuotes: true }
                        )
                    );
                });



        } else {
            res.status(404).send('Not Found')
        }
    })
}
