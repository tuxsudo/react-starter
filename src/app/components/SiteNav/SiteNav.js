import React from 'react';
import styles from './SiteNav.css';
import { Link } from 'react-router';
import classes from 'join-classnames';

export default ({links=[], className=""}) => (
    <nav className={classes(styles.nav, className)}>
        {links.map( ({href, text}, i) => (
            <Link className={styles.link} key={i} to={href}>{text}</Link>)
        )}
    </nav>
);
