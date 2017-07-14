import React from 'react';
import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav';
import classes from 'join-classnames';
import logo from './logo-placeholder.svg';
import {Link} from 'react-router-dom';

export default ({homelink="/", links = [], className=""}) => (
    <header className={classes(style.header, className)}>
        <Link to={homelink} className={style.brand}>
            <img className={style.logo} src={logo} alt="My Brand" />
            <span>React Starter</span>
        </Link>
        <SiteNav className={style.nav} links={links} />
    </header>
);
