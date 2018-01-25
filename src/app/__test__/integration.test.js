import Store from '../store'
import { setNav } from '../actions/site-nav'
import { setPageMeta } from '../actions/page-meta'
import { setHttpResponseCode } from '../actions/system'

const store = Store()

test('store exists', () => {
    expect(typeof store).toBe('object')  
})

test('nav action → store',  done => {
  const nav = ['home', 'about']
  store.subscribe(() => {
    const state = store.getState()
    expect(state.nav).toBe(nav)
    done()
  })

  store.dispatch(setNav(nav))
})

test('page meta action → store',  done => {
  store.subscribe(() => {
    const state = store.getState()
    expect(state.pageMeta.title).toBe('test title')
    done()
  })

  store.dispatch(setPageMeta({
    title: 'test title',
    meta: [{'og-description': 'page description'}]
  }))
})

test('system action → store',  done => {
  store.subscribe(() => {
    const state = store.getState()
    expect(state.system.httpResponse).toBe(451)
    done()
  })

  store.dispatch(setHttpResponseCode(451))
})