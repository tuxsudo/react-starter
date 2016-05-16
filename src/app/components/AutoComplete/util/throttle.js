export default function(fn) {
    let time;

    return function(...args) {
        if(!time) {
            time = setTimeout( () => {
                fn.apply(this, args);
                time = false;
            }, 300);
        }
    }
}
