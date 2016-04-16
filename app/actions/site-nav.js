import {SET as SET_NAV } from '../reducers/site-nav.js';
import getNav from '../services/site-nav.js';



function setNav( nav=[] ) {
    return { type: SET_NAV, nav };
}


export const init = () => dispatch =>
    getNav().then( n => dispatch( setNav(n)) );
