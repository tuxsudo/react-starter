import { init as initPeople } from './people.js';
import { init as initNav } from './site-nav.js';

export const bootstrap = () => Promise.all([
    initNav(),
    initPeople()
]);
