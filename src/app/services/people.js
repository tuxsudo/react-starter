import {API_HOST} from '../env.js';


export default () => (
    fetch(`${API_HOST}/api/people`)
        .then(response =>
            response.ok ? response.json() : Promise.reject(response) )
);
