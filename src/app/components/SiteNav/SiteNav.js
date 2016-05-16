import styles from './SiteNav.css';
import { Link } from 'react-router';
import classNames from 'classnames';

export default ({links=[], className=""}) => (
    <nav className={classNames(styles.nav, className)}>
        {links.map( (l,i) => <Link className={styles.link} key={`navlink${i}`} to={l.href}>{l.text}</Link>)}
    </nav>
);
