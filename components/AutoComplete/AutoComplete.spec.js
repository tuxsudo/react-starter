import React from 'react';
import AutoComplete from './AutoComplete.jsx';
import test from 'tape';
import { shallow } from 'enzyme';

test('<AutoComplete>', t => {

    const ac = shallow(<AutoComplete />);

    console.log(ac);

});
