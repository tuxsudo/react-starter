const successData = [
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


export default function() {
    // pretend this is grabbed async
    return new Promise( (resolve) => {
        setTimeout( ()=>resolve(successData), Math.random()*3000 );
    });
}
