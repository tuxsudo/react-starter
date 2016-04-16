import { INIT_PEOPLE, FIND_PEOPLE, SELECT_PERSON } from '../reducers/people.js';
import getPeople from '../services/people.js';


export const setPeople = people => ({ type: INIT_PEOPLE, people });

export const findPeople = query => ({ type: FIND_PEOPLE, query });

export const selectPerson = query => ({type: SELECT_PERSON, query });

export const init = () => dispatch =>
    getPeople().then( people => dispatch(setPeople(people)) );
