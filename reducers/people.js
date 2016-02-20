export const INIT_PEOPLE = Symbol('INIT_PEOPLE');
export const FIND_PEOPLE = Symbol('FIND_PEOPLE');
export const SELECT_PERSON = Symbol('SELECT_PERSON');


export default function people( state = { q:'', all: [], filtered:[] }, action) {
    switch(action.type) {
        case INIT_PEOPLE:
            return {
                q:'',
                all: action.people,
                filtered: []
            }

        case FIND_PEOPLE:
            return {
                all: [].concat( state.all ),
                q: action.q,
                filtered: action.q.length > 1
                    ? state.all.filter(p => ~p.toLowerCase().indexOf( action.q.toLowerCase() ))
                    : []
            };

        case SELECT_PERSON:
            return {
                all: [].concat(state.all),
                q: action.q,
                filtered: []
            };

        default:
            return state;
    }
}
