import Home from '../components/Home';
import { connect } from 'react-redux';
import { addMeta } from '../hocs/add-meta';

const metaHome = addMeta(Home);

const mapStateToProps = () => ({
    meta: {
        title: "Homepage, yo!",
        tags: [
            {"name": "description", "content": "A React Starter"},
            {"property": "og:type", "content": "article"}
        ]
    }
});


export default connect(mapStateToProps)(metaHome);
