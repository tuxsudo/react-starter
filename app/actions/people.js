import { INIT_PEOPLE, FIND_PEOPLE, SELECT_PERSON } from '../reducers/people.js';


function getPeople() {
    // fake async action...
    return Promise.resolve(
        [
            'Jared Anderson',
            'Sara Anderson',
            'Elijah Anderson',
            'Xander Anderson',
            'Maxwell Anderson',
            'Amelia Anderson',
            'Ivy Anderson',
            'Grandpa Anderson',
            'Grandma Anderson',
            'Grandpa Jensen',
            'Grandma Jensen',
            'Grandpa Ross'
        ]
    );
}

export const setPeople = people => ({ type: INIT_PEOPLE, people });

export const findPeople = query => ({ type: FIND_PEOPLE, query });

export const selectPerson = query => ({type: SELECT_PERSON, query });

export const init = () => dispatch =>
    getPeople().then( people => dispatch(setPeople(people)) );
