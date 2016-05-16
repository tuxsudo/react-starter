import successData from './mocks/nav.json';


export default function() {

    // pretend this is grabbed async
    return new Promise( (resolve) => {
        setTimeout( ()=>resolve(successData), Math.random()*3000 );
    });
}
