import React from 'react';
import style from './auto-complete.css';
import classNames from 'classnames';

function throttle(fn) {
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

function strongify(full, part) {
    let pattern = new RegExp(`(${part})`, 'ig'),
        parts = full.split(pattern);

    return parts.map( (p, i) => pattern.test(p)
        ? <strong key={i}>{part}</strong>
        : p
    );
}


export default class AutoComplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = { options: [], highlight: -1, isactive: false, value: this.props.value||'' };
        this.timer = null;
    }

    handleValueChanges(event) {
        let typedCharacters = event.target.value,
            options = typedCharacters.length < 2
                ? []
                : this.props.options
                    .filter( p=> ~(p.text || p).toLowerCase().indexOf( typedCharacters.toLowerCase()) )
                    .slice(0, this.props.max || 1000);

        this.setState({ options, highlight: -1, isactive: true, value: typedCharacters });
        this.notify();
    }

    handleMetaKeys(event) {

        switch(event.keyCode || event.which) {
            case 40: // down
                this.highlight( this.state.highlight+1 );
                event.preventDefault();
                break;

            case 38: //up
                this.highlight( this.state.highlight-1 );
                event.preventDefault();
                break;

            case 27: //escape
                this.reset();
                event.preventDefault();
                break;

            case 13: //enter
                let selected = this.refs[`option-${this.state.highlight}`];
                this.select( selected && (selected.dataset.value || selected.textContent) || this.refs.input.value);
                event.preventDefault();
                break;
        }
    }

    reset() {
        this.setState({options: [], highlight: -1})
    }

    notify() {
        if(this.props.onSelect) {
            this.props.onSelect(this.refs.input.value);
        }
    }

    select(value) {
        this.refs.input.value = value;
        this.refs.input.focus();
        this.reset();
        this.notify();
    }

    highlight(n) {
        if(n >= 0 && n < this.state.options.length) {
            this.setState({ highlight: n})
        }
    }

    render() {
        let options = this.state.options
            .map( (o, i) => (
                <div
                    className={classNames({
                        [ style['option-item'] ]: true,
                        [ style['option-item--selected'] ] : i === this.state.highlight
                    })}
                    onMouseOver={()=>this.setState({ highlight: i})}
                    onClick={ e => this.select(o.value || o) }
                    data-value={o.value || o}
                    ref={`option-${i}`}
                    key={i}>
                    { strongify(o.text||o, this.state.value ) }
                </div>
            ));

        return (
            <div className={style['auto-complete']} onBlur={ ()=>this.setState({isactive: false}) }>
                <label>{ this.props.label }</label>
                <input
                    className={ style.input }
                    placeholder={this.props.placeholder}
                    type="text"
                    ref="input"
                    onKeyDown={ this.handleMetaKeys.bind(this) }
                    onChange={ throttle(this.handleValueChanges.bind(this)) }
                    defaultValue={ this.props.value }
                />
                <div
                    className={classNames({
                        [style.options]: true,
                        [style['options--active']] : this.state.isactive
                    })}>
                    {options}
                </div>
            </div>
        );
    }



}
