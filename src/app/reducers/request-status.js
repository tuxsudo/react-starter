export const SET_REQUEST_404 = "SET_REQUEST_404";


export default function people( state = 200, action) {
    switch(action.type) {
        case SET_REQUEST_404:
            return 404;

        default:
            return state;
    }
}
