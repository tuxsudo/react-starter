import {RECEIVE_SITE_NAVIGATION } from '../reducers/site-nav.js';
import getNav from '../services/site-nav.js';



function setNav( nav=[] ) {
    return { type: RECEIVE_SITE_NAVIGATION, nav };
}


export const init = () => (dispatch) => (
    getNav()
        .then( n => dispatch(setNav(n)) )
);
