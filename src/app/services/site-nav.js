import {API_HOST} from '../env.js';


export default () => (
    fetch(`${API_HOST}/api/nav`)
        .then(response =>
            response.ok ? response.json() : Promise.reject(response) )
);
