import { connect } from 'react-redux';
import { Link } from 'react-router';
import SiteHeader from '../../components/SiteHeader/SiteHeader.js';
import 'normalize.css';
import styles from './style.scss';


const App = ({children}) => (
    <div className={styles.app}>

        <SiteHeader />

        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/auto-completes">Auto Complete Demo</Link></li>
                </ul>
            </nav>

            <main className={styles.main}>{children}</main>
        </div>
    </div>
);



export default connect( )(App);
