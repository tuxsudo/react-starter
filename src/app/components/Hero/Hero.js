import React from 'react';
import styles from './style.css';
import classes from 'join-classnames';

export const Hero = ({title, subtitle, bgSrc, overlay=false, href, onClick, className}) => (
    <a
        className={classes(styles.hero, className, (href || onClick) && styles.clickable)}
        style={{backgroundImage: bgSrc ? `url(${bgSrc})`:""}}
        onClick={onClick}
        {...(href ? { href } : {})}
    >

        {overlay && <span className={classes(styles.overlay, styles[overlay] )} />}

        <h1 className={styles.title}>
            {title}
            {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
        </h1>


    </a>
);


export default Hero;
