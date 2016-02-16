import React from 'react';

export default function(full, part) {
    let pattern = new RegExp(`(${part})`, 'ig'),
        parts = full.split(pattern);

    return parts.map( (p, i) => pattern.test(p)
        ? <strong key={i}>{part}</strong>
        : p
    );
}
