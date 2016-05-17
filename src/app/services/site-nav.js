import {DEV_ENDPOINT_BASE} from '../env.js';


export default () => (
    fetch(`${DEV_ENDPOINT_BASE}/api/nav`)
        .then(response =>
            response.ok ? response.json() : Promise.reject(response) )
);
