// import 'babel-polyfill';
import {Component} from 'react';
import { connect } from 'react-redux';
import SiteHeader from '../../components/SiteHeader/SiteHeader.js';
import 'normalize.css';
import styles from './style.scss';
import { bootstrap } from '../../actions/bootstrap.js';

class App extends Component {

    componentWillMount() {
        bootstrap()
            .then(data =>
                data.forEach(action => this.props.dispatch(action)
            )
        );
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
