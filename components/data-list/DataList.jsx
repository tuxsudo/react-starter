import React from 'react';


function uniqId() {
    return "DataList-".concat( btoa((new Date).toISOString()) );
}


export default props => {

    let id = uniqId(),
        options = props.options
            .map( (o, i) => (
                <option key={i} value={ o.value||o }>{ o.text||o }</option>
            ));

    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <input
                type="text"
                list={id}
                placeholder={ props.placeholder }
                defaultValue={ props.value }
                onChange={ props.onChange }
            />

            <datalist id={ id }>{ options }</datalist>
        </div>
    );


};
