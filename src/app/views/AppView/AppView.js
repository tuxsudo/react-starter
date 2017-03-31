import React from 'react';
import 'normalize.css';
import SiteHeader from '../../components/SiteHeader';
import styles from './style.css';


export default ({homelink, children, nav}) => (

    <div className={styles.app}>

        <SiteHeader className={styles.header} links={nav} homelink={homelink} />

        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
