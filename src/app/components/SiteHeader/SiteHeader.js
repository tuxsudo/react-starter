import React from 'react';
import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav';
import classes from 'join-classnames';
import logo from './logo-placeholder.svg';
import {IndexLink} from 'react-router';

export default ({homelink="/", links = [], className=""}) => (
    <header className={classes(style.header, className)}>
        <IndexLink to={homelink} className={style.brand}>
            <img className={style.logo} src={logo} alt="My Brand" />
            <span>React Starter</span>
        </IndexLink>
        <SiteNav className={style.nav} links={links} />
    </header>
);
