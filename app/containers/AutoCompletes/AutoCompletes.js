import {Component} from 'react';
import { connect } from 'react-redux';
import AutoComplete from '../../components/AutoComplete/AutoComplete.js';
import DataList from '../../components/DataList/DataList.js';
import { init } from '../../actions/people.js';
import Helmet from 'react-helmet';

class AutoCompleteContainer extends Component {

    static load(store) {
        return store.dispatch( init() );
    }

    componentWillMount() {
        return this.props.dispatch( init() );
    }

    render() {
        const {people} = this.props;
        // [], filtered = [], q="", dispatch }) =>
        return (
            <div>
                <Helmet title="3 different AutoCompletes" />
                <AutoComplete
                    onSelect={console.log.bind(console)} // eslint-disable-line
                    options={people}
                    placeholder="choose a relative..."
                    value="Jared"
                />

                <hr />

                <DataList
                    onChange={e=>console.log(e.target.value)} // eslint-disable-line
                    options={people}
                />

                <hr />


            </div>
        );
    }
}



export default connect( ({ people }) => ({ people: people.all, filtered: people.filtered, q: people.q }) )(AutoCompleteContainer);
