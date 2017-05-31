# React/Redux Project Starter

A project starter for universalmorphic React/Redux apps


## Features

*   [React](https://facebook.github.io/react/): THE component-based view library.
*   [Redux](http://redux.js.org/): application state management
*   [React-Redux Official Bindings](https://github.com/reactjs/react-redux): remove the boilerplate code when connecting React to Redux
*   [React Router](https://github.com/reactjs/react-router): server/client side application router
*   [Redux Thunk](https://github.com/gaearon/redux-thunk): easier async and sequential actions.
*   [React Helmet](https://github.com/nfl/react-helmet): title and meta tags FTW
*   [ExpressJS](http://expressjs.com/): server-side app framework.
*   [WebPack](https://webpack.github.io/): module bundler.
*   [PostCSS](https://github.com/postcss/postcss): CSS transformations via JS
*   [CSS Modules](https://github.com/css-modules/css-modules): private name spaces for css classes.
*   [CSSNext](http://cssnext.io/): future CSS today.
*   [React StoryBook](https://github.com/kadirahq/react-storybook): a component authoring sandbox. also component functional testing .
*   [Enzyme](https://github.com/airbnb/enzyme) & [Tape](https://github.com/substack/tape): unit testing
*   [Eslint](http://eslint.org/): JS linting.


## Development

1.  first, run `npm i` to install dependencies
1.  to start the component dev environment, run `npm run components`
1.  to start the application dev environment, run `npm run dev`
1.  to lint the JS, run `npm run lint`
1.  build the production app via `npm run build`
1.  start the app via `npm start`


## Files

1.  The React / Redux app is found in [src/app](./src/app)
1.  The production Express.js server is found in [src/server](./src/server)
1.  Component stories (for the component dev environment) are found in [.storybook/config.js](./.storybook/config.js)

## FAQ

1.  Do I need a particular version of `npm`?
    -  Please use `npm` version 3 or higher.
1.  Why do you have `package.json` files in your Component directories? 
    -  Placing a `package.json` file with a proper `main` property allows you to `import` that code by referencing only the parent folder. Example: `import LandingView from '../views/LandingView';`. This gives you the flexibility of refactoring the Component without changing the consuming `import`s.
1.  My editor/linter claims the `package.json` files in the Component directories are missing the `name` and `version` properties.
    -  According to the specification, `name` and `version` are both required properties of a `package.json` file. However, they are not necessary in this context because we are not publishing the Components separate from the project. We chose to have minimal `package.json` files. Please feel free to add the missing values if this bothers you or your linter enough that you or your linter can't get past it.
1. How do I allow node modules to be processed by webpack (for example, be processed by babel)?
    - There is a whitelist array in the file `webpack.server.babel.js` which allows packages to be processed by webpack if they are included. To add a package called `my-foo-bar`, the array would be `whitelist: ['normalize.css', 'my-foo-bar]`. To include all packages under a certain namespace, you can use a regular expression test. For example, to add all packages under `@foo`, your array would be `whitelist: ['normalize.css', /^[@]foo/]` 
