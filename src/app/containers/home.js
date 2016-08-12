import Home from '../components/Home';
import { connect } from 'react-redux';
import { addMeta } from '../lib/add-meta';

const metafiedHome = addMeta(Home);

const mergeAllTheProps = (state, actions, own) => ({
    title: "Homepage, yo!",
    meta: [
        {"name": "description", "content": "A React Starter"},
        {"property": "og:type", "content": "article"}
    ]
});


export default connect(mergeAllTheProps)(metafiedHome);
