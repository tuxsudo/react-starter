import React from 'react';
import hasher from 'string-hash';


const uniqId = data => `dl-${hasher(JSON.stringify(data))}`;





export default ({options=[], className="", label="", value="", placeholder="", onChange=()=>{} }) => {

    let id = uniqId(options),
        Options = options
            .map( (o, i) => (
                <option key={i} value={o.value||o}>{o.text||o}</option>
            ));

    return (
        <div className={className}>
            <label>{label}</label>
            <input
                defaultValue={value}
                list={id}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
            />

            <datalist id={id}>{Options}</datalist>
        </div>
    );


};
