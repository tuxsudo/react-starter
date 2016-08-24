import NotFound from '../components/Error';
import {wrap} from '../lib/ss-resolve';
import {set404} from '../actions/request-status';
import { connect } from 'react-redux';
import { addMeta } from '../lib/add-meta';

const metaNotFound = addMeta(NotFound);

// on server when mounted, dispatch action which sets status to 404 in store.
export const RouteComponent = wrap(
    metaNotFound,
    (props, store) => Promise.resolve(store.dispatch(set404()))
);

const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    title: "Page Not Found",
    subtitle: "Sorry Not Sorry",
    metaTitle: "Page Not Found",
    meta: [
        {"name": "description", "content": "This page was not found or an error occured"},
        {"property": "og:type", "content": "article"}
    ]
})

export default connect(
    undefined,
    undefined,
    mergeAllTheProps
)(RouteComponent);
