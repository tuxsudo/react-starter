import siteNanReducer, { RECEIVE_SITE_NAVIGATION } from './site-nav.js';

test('Reducers setNav test', () => {
    expect(siteNanReducer(undefined, {type: undefined})).toEqual([]);

    expect(
        siteNanReducer([], {type: RECEIVE_SITE_NAVIGATION, nav: ['foo', 'bar', 'baz']})
    ).toEqual(['foo', 'bar', 'baz']);
});
