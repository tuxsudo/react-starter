import AutoComplete from '../AutoComplete/AutoComplete.js';
import DataList from '../DataList/DataList.js';
import Helmet from 'react-helmet';


export default ({people=[]}) => (
    <div>
        <Helmet title="2 different AutoCompletes" />
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
