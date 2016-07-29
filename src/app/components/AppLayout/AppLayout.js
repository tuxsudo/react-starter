import SiteHeader from '../SiteHeader/SiteHeader.js';
import 'normalize.css';
import styles from './style.css';


export default ({homelink, children, nav}) => (

    <div className={styles.app}>

        <SiteHeader className={styles.header} links={nav} homelink={homelink} />

        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
