import AutoComplete from '../AutoComplete/AutoComplete.js';
import DataList from '../DataList/DataList.js';
import Helmet from 'react-helmet';


export default ({people=[]}) => (
    <div>
        <Helmet title="AutoCompletes" />

        <label>
            People Dropdown
            <select>
                <option>Choose...</option>
                {people.map( (p, i) => <option key={i}>{p}</option>)}
            </select>
        </label>

        <hr />

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

    </div>
);
