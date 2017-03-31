import React from 'react';
import styles from './BigOList.css';
import classes from 'join-classnames';
import {Children as childUtil} from 'react';

export const BigOList = ({children, className}) => (
    <ol styles className={classes(styles.list, className )}>
        {childUtil.map(children, c => (<li className={styles.item}>{c}</li>) )}
    </ol>
)

export default BigOList;
