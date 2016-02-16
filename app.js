import styles from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import * as actions from './store/people/actions.js';
import AutoComplete from './components/auto-complete/AutoComplete.jsx';
import DataList from './components/data-list/DataList.jsx';
import DumbComplete from './components/dumb-complete/DumbComplete.jsx';


store.dispatch(actions.init([
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
]));


class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = store.getState().people;

    }

    componentDidMount() {
        this.props.store.subscribe( () => this.setState( store.getState().people ));
    }

    render() {
        return (
            <div>
                <AutoComplete
                    options={this.state.all}
                    value="Jared"
                    placeholder="choose a relative..."
                    onSelect={ console.log.bind(console) }
                    />

                <hr />

                <DataList
                    options={this.state.all}
                    onChange={ e=> console.log(e.target.value) }
                    />

                <hr />

                <DumbComplete
                    options={this.state.filtered}
                    value={this.state.q}
                    onChange={ e=> this.props.store.dispatch(actions.findPeople(e.target.value)) }
                    onSelect={ e=> this.props.store.dispatch(actions.selectPerson(e.target.textContent)) }
                    />

            </div>
        );
    }

}

ReactDOM.render(
<MyComponent store={store} />,
    document.getElementById('app')
);
