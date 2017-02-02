import test from 'tape';
import { setNav } from './site-nav.js';
import { RECEIVE_SITE_NAVIGATION } from '../reducers/site-nav.js';

test('Actions setNav test', t => {

    t.deepEqual(
        setNav(['foo', 'bar', 'ray']),
        {type: RECEIVE_SITE_NAVIGATION, nav: ['foo', 'bar', 'ray']},
        'setNav action'
    );

    t.end();
});
