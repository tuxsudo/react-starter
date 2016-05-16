import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav.js';
import classNames from 'classnames';
import logo from './logo-placeholder.svg';
import {IndexLink} from 'react-router';

export default ({links = [], className=""}) => (
    <header className={classNames(style.header, className)}>
        <IndexLink to="/" className={style.brand}>
            <img className={style.logo} src={logo} alt="My Brand" />
            <span>My website</span>
        </IndexLink>
        <SiteNav className={style.nav} links={links} />
    </header>
);
