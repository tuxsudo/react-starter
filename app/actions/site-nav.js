import {SET as SET_NAV } from '../reducers/site-nav.js';


function getNav() {
    // pretend this is grabbed async
    return Promise.resolve([
        {
            href: '/',
            text: 'Home'
        },

        {
            href: '/auto-completes',
            text: 'Demo'
        }
    ]);
}

function setNav( nav=[] ) {
    return { type: SET_NAV, nav };
}


export const init = () => dispatch =>
    getNav().then( n => dispatch( setNav(n)) );
