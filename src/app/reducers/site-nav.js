export const RECEIVE_SITE_NAVIGATION = "RECEIVE_SITE_NAVIGATION";

export default function(state = [], {type, nav = [] } ) {
    switch(type) {
        case RECEIVE_SITE_NAVIGATION:
            return nav;

        default:
            return state;
    }
}

export const selectSiteNav = (state) => state;
