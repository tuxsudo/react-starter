// import 'babel-polyfill';
import {Component} from 'react';
import { connect } from 'react-redux';
import SiteHeader from '../../components/SiteHeader/SiteHeader.js';
import 'normalize.css';
import styles from './style.css';
import {init as initNav} from '../../actions/site-nav.js';
// import { bootstrap } from '../../actions/bootstrap.js';

class App extends Component {

    // make grabbing the nav a blocking action on the server...
    static load(store) {
        return store.dispatch( initNav() );
    }

    // load nav async on the client...
    componentWillMount() {
        return this.props.dispatch( initNav() );
    }

    render() {
        return (
            <div className={styles.app}>

                <SiteHeader className={styles.header} links={this.props.nav}  />

                <div className={styles.wrapper}>
                    <main className={styles.main}>{this.props.children}</main>
                </div>
            </div>
        );
    }

}





export default connect(
    store => ({ nav: store.nav })
)( App );
