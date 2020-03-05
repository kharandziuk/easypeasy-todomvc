import { createStore, createTypedHooks } from 'easy-peasy'
import storage from 'redux-persist/lib/storage'

import todos from './todos'

const model = { todos }

const { useStoreActions, useStoreState } = createTypedHooks()

const store = createStore(model)

export { useStoreActions, useStoreState }

export default store
