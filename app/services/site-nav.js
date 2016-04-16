const successData = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/auto-completes',
        text: 'Demo'
    }
];

export default function() {

    // pretend this is grabbed async
    return new Promise( (resolve) => {
        setTimeout( ()=>resolve(successData), Math.random()*3000 );
    });
}
