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



export const init = () =>
    getPeople().then( people => ({ type: INIT_PEOPLE, people }));

export const findPeople = q => ({ type: FIND_PEOPLE, q });

export const selectPerson = q => ({type: SELECT_PERSON, q });
