import {INIT_PEOPLE, FIND_PEOPLE, SELECT_PERSON} from './constants.js';

export const init = people => ({ type: INIT_PEOPLE, people });
export const findPeople = q => ({ type: FIND_PEOPLE, q });
export const selectPerson = q => ({type: SELECT_PERSON, q });
