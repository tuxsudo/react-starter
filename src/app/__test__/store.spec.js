import Store from '../store';

test("store setup", () => {
  const store = Store();
  expect(typeof store).toBe('object')
  expect(typeof store.getState()).toBe('object')

  expect(store).toHaveProperty('dispatch')
  expect(store).toHaveProperty('getState')
  expect(store).toHaveProperty('replaceReducer')
  expect(store).toHaveProperty('subscribe')

  expect(store.getState()).toHaveProperty('nav')
  expect(store.getState()).toHaveProperty('pageMeta')
  expect(store.getState()).toHaveProperty('routing')
  expect(store.getState()).toHaveProperty('system')

});