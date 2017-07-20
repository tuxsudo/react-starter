import {
    RECEIVE_HTTP_RESPONSE_CODE,
    RECEIVE_HTTP_RESPONSE_CODE_RESET,
    RECEIVE_APPLICATION_ERROR_RESET,
    RECEIVE_APPLICATION_ERROR,
    RECEIVE_APPLICATION_ERROR_REMOVAL
} from '../../reducers/system.js';

import {
  setHttpResponseCode,
  resetHttpResponseCode,
  resetApplicationErrors,
  addApplicationError,
  removeApplicationError
} from '../system';

test('Actions: system', () => {

  expect(setHttpResponseCode(200)).toEqual({
    type: RECEIVE_HTTP_RESPONSE_CODE,
    payload: 200
  })

  expect(resetHttpResponseCode()).toEqual({
    type: RECEIVE_HTTP_RESPONSE_CODE_RESET
  })

  expect(resetApplicationErrors()).toEqual({
    type: RECEIVE_APPLICATION_ERROR_RESET
  })

  const error = {
    id: 1,
    title: 'whoops!',
    details: 'it bork',
    date: new Date()
  };

  expect(addApplicationError(error)).toEqual({
    type: RECEIVE_APPLICATION_ERROR,
    payload: error
  })

  expect(removeApplicationError({id: error.id})).toEqual({
    type: RECEIVE_APPLICATION_ERROR_REMOVAL,
    payload: {id: error.id}
  })

});