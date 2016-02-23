import style from './style.css';
import SiteNav from '../SiteNav/SiteNav.js';
import classNames from 'classnames';

export default ({links = [], className=""}) => (
    <header className={classNames(style.header, className)}>
        <span className={style.brand}>Welcome to my Website</span>
        <SiteNav className={style.nav} links={links} />
    </header>
);
