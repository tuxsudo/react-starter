import { INIT_PEOPLE } from '../reducers/people.js';

export const bootstrap = ({ people }) => ({ type: INIT_PEOPLE, people });
