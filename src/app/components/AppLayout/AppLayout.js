import SiteHeader from '../SiteHeader/SiteHeader.js';
import 'normalize.css';
import styles from './style.css';


export default ({children, nav}) => (

    <div className={styles.app}>

        <SiteHeader className={styles.header} links={nav}  />

        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
