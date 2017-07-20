import reducer, {
  selectPageMeta,
  selectPageTitle,
  selectMetaTags,
  RECEIVE_PAGE_META  
} from '../page-meta';

test('Action: page-meta', ()=>{

  const state = {
    title: 'a title',
    meta: [{a:1}]
  }

  const action = {
    type: RECEIVE_PAGE_META
  }

  expect(selectPageMeta(state))
  .toEqual(state);

  expect(selectPageTitle(state))
  .toBe(state.title);

  expect(selectMetaTags(state))
  .toBe(state.meta);

  expect(reducer(undefined,{}))
  .toEqual({})

  expect(reducer(undefined, {...action, payload: {...state}} ))
  .toEqual(state)

});