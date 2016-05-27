import styles from './SiteNav.css';
import { Link } from 'react-router';
import classNames from 'classnames';

export default ({links=[], className=""}) => (
    <nav className={classNames(styles.nav, className)}>
        {links.map( ({href, text}, i) => (
            <Link className={styles.link} key={i} to={href}>{text}</Link>)
        )}
    </nav>
);
