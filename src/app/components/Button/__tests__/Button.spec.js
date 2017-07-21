import React from 'react';
import Button from '../Button';
import styles from '../Button.css';
import {spy} from 'sinon';
import { shallow } from 'enzyme';


test('<Button />', () => {
    expect(shallow(<Button value="Go!"/>).text()==="Go!").toBeTruthy();

    expect(shallow(<Button />).text()==="Submit").toBeTruthy();

    expect(shallow(<Button type="submit"/>).prop('type')==="submit").toBeTruthy();

    expect(shallow(<Button />).prop('type')==="button").toBeTruthy();

    expect(shallow(<Button emphasis="primary" />).hasClass(styles.primary)).toBeTruthy();

    expect(shallow(<Button />).hasClass(styles.primary)).toBeTruthy();

    expect(shallow(<Button emphasis={false} />).hasClass(styles.secondary)).toBeTruthy();

    expect(shallow(<Button emphasis="success" />).hasClass(styles.success)).toBeTruthy();

    expect(shallow(<Button emphasis="error" />).hasClass(styles.error)).toBeTruthy();

    expect(shallow(<Button emphasis="warn" />).hasClass(styles.warn)).toBeTruthy();

    expect(shallow(<Button className="myClass" />).hasClass("myClass")).toBeTruthy();

    expect(shallow(<Button disabled />).prop('disabled')===true).toBeTruthy();


    const clickHandler = spy();
    shallow(<Button onClick={clickHandler} />).simulate('click');
    expect(clickHandler.callCount===1).toBeTruthy();

    expect(3).toBe(3)
});
