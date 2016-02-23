export const SET = Symbol('SET');

export default function(state = [], {type, nav = [] } ) {
    switch(type) {
        case SET:
            return nav;

        default:
            return state;
    }
}
