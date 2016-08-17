import { connect } from 'react-redux';
import { init } from '../actions/people.js';
import People from '../components/People';
import mountLoad from '../lib/mount-load';
import {wrap} from '../lib/ss-resolve';
import {isBrowser} from '../env.js';
import { addMeta } from '../lib/add-meta';

const MetaPeople = addMeta(People);
const LazyPeople = mountLoad(MetaPeople);

const resolveOnServer = (props, store) => store.dispatch( init() );
const ServerLoadedComponent = wrap(LazyPeople, resolveOnServer);


const mapStateToProps = ({ people }) =>
    ({ people: people.all, filtered: people.filtered, q: people.q });


const bindActionsToDispatch = (dispatch) => ({
    onLoad: () => isBrowser && dispatch( init() )
});


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    onLoad: () => actions.onLoad(),
    wait: state.people.length === 0,
    metaTitle: "People Page",
    meta: [
        {"name": "description", "content": "This page shows a list of people"},
        {"property": "og:type", "content": "article"}
    ]
});


export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( ServerLoadedComponent );
