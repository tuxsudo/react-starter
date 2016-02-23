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

export function init() {
    return getNav().then(setNav);
}

function setNav( nav=[] ) {
    return { type: SET_NAV, nav };
}
