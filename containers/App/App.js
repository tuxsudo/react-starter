import { connect } from 'react-redux';

import AutoComplete from '../../components/AutoComplete/AutoComplete.js';
import DataList from '../../components/DataList/DataList.js';
import DumbComplete from '../../components/DumbComplete/DumbComplete.js';
import { findPeople, selectPerson } from '../../actions/people.js';


const App = ({ people = [], filtered = [], q="", dispatch }) => (
    <div>
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

        <DumbComplete
            options={filtered}
            value={q}
            onChange={e => dispatch( findPeople(e.target.value))}
            onSelect={e => dispatch( selectPerson(e.target.textContent))}
        />



    </div>
);



export default connect( ({ people }) => ({ people: people.all, filtered: people.filtered, q: people.q }) )(App);
