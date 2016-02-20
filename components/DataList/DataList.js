import React from 'react';


function uniqId() {
    return "dl-".concat( (new Date).toISOString() );
}


export default ({options=[], className="", label="", value="", placeholder="", onChange=()=>{} }) => {

    let id = uniqId(),
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
