import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import AutoCompletes from './containers/AutoCompletes/AutoCompletes.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/auto-completes" component={AutoCompletes} />
    </Route>
);

export default routes;
