import reducer, {
  httpResponse,
  errors,
  working,
  selectHTTPResponseCode,
  selectAllApplicationErrors,
  selectApplicationError,
  selectSystemWorking,
  RECEIVE_HTTP_RESPONSE_CODE,
  RECEIVE_HTTP_RESPONSE_CODE_RESET,
  RECEIVE_APPLICATION_ERROR_RESET,
  RECEIVE_APPLICATION_ERROR,
  RECEIVE_APPLICATION_ERROR_REMOVAL,
  RECEIVE_LOADING_START,
  RECEIVE_LOADING_END
} from '../system';

test('Reducer: system', () => {

  //httpResponse
  expect(httpResponse(undefined, {})).toEqual(200)
  expect(httpResponse(404, {type: RECEIVE_HTTP_RESPONSE_CODE, payload: 304})).toBe(304)
  expect(httpResponse(500, {type: RECEIVE_HTTP_RESPONSE_CODE_RESET})).toBe(200)


  //errors
  const error = {
    id:1,
    title: 'shucks',
    details: 'it broke',
    date: new Date()
  };

  expect(errors(undefined,{})).toEqual({})
  expect(errors(error, {})).toEqual(error)
  expect(errors(error, {type:RECEIVE_APPLICATION_ERROR_RESET})).toEqual({})
  expect(errors(undefined, {type:RECEIVE_APPLICATION_ERROR, payload:error})).toEqual({1: error})
  expect(errors({a:1}, {type:RECEIVE_APPLICATION_ERROR, payload:error})).toEqual({a:1, 1: error})
  expect(errors({a:{}, b:{}}, {type:RECEIVE_APPLICATION_ERROR_REMOVAL, payload:{id:'b'}})).toEqual({a:{}})


  //working
  expect(working(undefined,{})).toEqual(false)
  expect(working(false, {})).toBe(false)
  expect(working(false, {type:RECEIVE_LOADING_START})).toBe(true)
  expect(working(true, {type:RECEIVE_LOADING_END})).toBe(false)

  //selectors
  const state = {
    httpResponse:200,
    errors:{
      1: {title: 'a error'},
      2: {title: 'rorre a'}
    },
    working: false
  }
  expect(selectHTTPResponseCode(state)).toBe(200)
  expect(selectAllApplicationErrors(state)).toEqual([{"title": "a error"}, {"title": "rorre a"}])
  expect(selectSystemWorking(state)).toBe(false)
})