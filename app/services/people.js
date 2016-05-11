import successData from './mocks/people.json';

export default function() {
    // pretend this is grabbed async
    return new Promise( (resolve) => {
        setTimeout( ()=>resolve(successData), Math.random()*3000 );
    });
}
