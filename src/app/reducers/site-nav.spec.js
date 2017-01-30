import test from 'tape';
import siteNanReducer, { RECEIVE_SITE_NAVIGATION } from './site-nav.js';

test('Reducers setNav test', t => {

    t.deepEqual(siteNanReducer(undefined, {type: undefined}), [], 'setNav inital');

    t.deepEqual(
        siteNanReducer([], {type: RECEIVE_SITE_NAVIGATION, nav: ['foo', 'bar', 'baz']}),
        ['foo', 'bar', 'baz'],
        'setNav with list'
    );

    t.end();
});
