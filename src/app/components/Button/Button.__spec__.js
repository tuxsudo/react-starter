import React from 'react';
import Button from './Button';
import styles from './Button.css';
import test from 'tape';
import {spy} from 'sinon';
import { shallow } from 'enzyme';


test('<Button />', t => {


    t.ok(
        shallow(<Button value="Go!"/>).text()==="Go!",
        "Has prop `value`"
    );

    t.ok(
        shallow(<Button />).text()==="Submit",
        `Default value="Submit"`
    );

    t.ok(
        shallow(<Button type="submit"/>).prop('type')==="submit",
        "Has prop `type`"
    );

    t.ok(
        shallow(<Button />).prop('type')==="button",
        `Default type="button"`
    );

    t.ok(
        shallow(<Button emphasis="primary" />).hasClass(styles.primary),
        "Has prop `emphasis`"
    );

    t.ok(
        shallow(<Button />).hasClass(styles.primary),
        `Default emphasis="primary"`
    );

    t.ok(
        shallow(<Button emphasis={false} />).hasClass(styles.secondary),
        "Accepts emphasis={false}"
    );

    t.ok(
        shallow(<Button emphasis="success" />).hasClass(styles.success),
        `Accepts emphasis="success"`
    );

    t.ok(
        shallow(<Button emphasis="error" />).hasClass(styles.error),
        `Accepts emphasis="error"`
    );

    t.ok(
        shallow(<Button emphasis="warn" />).hasClass(styles.warn),
        `Accepts emphasis="warn"`
    );

    t.ok(
        shallow(<Button className="myClass" />).hasClass("myClass"),
        "Respects prop `className`"
    );

    t.ok(
        shallow(<Button disabled />).prop('disabled')===true,
        "Respects prop `disabled`"
    );


    const clickHandler = spy();
    shallow(<Button onClick={clickHandler} />).simulate('click');
    t.ok(
        clickHandler.callCount===1,
        "Respects prop `onClick`"
    );

    t.end();

});
