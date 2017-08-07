import { setNav } from '../site-nav.js';
import { RECEIVE_SITE_NAVIGATION } from '../../reducers/site-nav.js';

test('Actions setNav test', () => {
    expect( setNav(['foo', 'bar', 'ray']) )
    .toEqual( {type: RECEIVE_SITE_NAVIGATION, nav: ['foo', 'bar', 'ray']} );
});
