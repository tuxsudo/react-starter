import { INIT_PEOPLE } from '../reducers/people.js';

const people = [
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
];

export const bootstrap = () => ({ type: INIT_PEOPLE, people });
