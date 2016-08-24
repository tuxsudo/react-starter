import Home from '../components/Home';
import { connect } from 'react-redux';
import { addMeta } from '../lib/add-meta';

const metaHome = addMeta(Home);

const mergeAllTheProps = (state, actions, own) => ({
    metaTitle: "Homepage, yo!",
    meta: [
        {"name": "description", "content": "A React Starter"},
        {"property": "og:type", "content": "article"}
    ]
});


export default connect(mergeAllTheProps)(metaHome);
