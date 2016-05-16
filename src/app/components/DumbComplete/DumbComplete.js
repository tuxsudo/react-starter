import style from './style.css';



export default props => {

    let options = props.options.map((opt,i) => (
        <a
            key={i}
            className={style['option-item']}
            onClick={ props.onSelect }>
            { opt }
        </a>)
    );

    return (
        <div className={ style['auto-complete'] }>

            <label>{props.label}</label>

            <input
                type="text"
                placeholder={ props.placeholder }
                onKeyDown={ props.onInput }
                onChange={ props.onChange }
                onFocus={ props.onFocus }
                onBlur={ props.onBlur }
                value={ props.value }
                />

            <div className={style.options}>{options}</div>

        </div>

    );



}
