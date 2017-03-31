import React from 'react';
import styles from './Button.css';
import classes from 'join-classnames';


const determineEmphasis = emphasis => {

    switch(emphasis) {

        case "error":
        case "warn":
        case "success":
            return emphasis;

        case false:
        case "secondary":
            return "secondary";

        default:
            return "primary";

    }
}


export default ({onClick, type="button", emphasis="primary", disabled=false, children, value="Submit", className}) => (
    <button
        type={type}
        onClick={onClick}
        className={classes(styles.button, styles[determineEmphasis(emphasis)], className)}
        disabled={disabled}
    >
        {children || value}
    </button>

);
