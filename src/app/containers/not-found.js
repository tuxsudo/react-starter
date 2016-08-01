import NotFound from '../components/Error';
import {wrap} from '../lib/ss-resolve';
import {set404} from '../actions/request-status';
import { connect } from 'react-redux';

// on server when mounted, dispatch action which sets status to 404 in store.
export const RouteComponent = wrap(
    NotFound,
    (props, store) => Promise.resolve(store.dispatch(set404()))
);

const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    title: "Page Not Found",
    subtitle: "Sorry Not Sorry"
})

export default connect(
    undefined,
    undefined,
    mergeAllTheProps
)(RouteComponent);
