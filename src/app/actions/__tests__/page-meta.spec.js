import { setPageMeta } from '../page-meta';
import { RECEIVE_PAGE_META } from '../../reducers/page-meta';

test.only('Actions: page meta', () => {
    const meta = {
        title: 'some page title',
        meta: 'some page meta'
    };

    expect( setPageMeta(meta) )
    .toEqual({
        type: RECEIVE_PAGE_META, 
        payload: {
            title: 'some page title',
            meta: 'some page meta'
        }
    });

    expect(setPageMeta())
    .toEqual({
        type: RECEIVE_PAGE_META, 
        payload: {
            title: "",
            meta: []
        }
    });
});
