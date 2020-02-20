import { createStore, createTypedHooks } from 'easy-peasy'
import { persistReducer, persistStore } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

import todos from './todos'

const model = { todos, }

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_STORE_KEY || '',
})

const { useStoreActions, useStoreState } = createTypedHooks()

const store = createStore(model, {
  disableImmer: true,
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: `${process.env.REACT_APP_ENVIRONMENT}`,
        storage,
        stateReconciler: autoMergeLevel2,
        transforms: [encryptor],
      },
      reducer,
    ),
})

const persistor = persistStore(store)

export function resetStores() {
  Object.values(store.dispatch).forEach(
    storeAction => storeAction.resetStore && storeAction.resetStore(),
  )
}
export { persistor, useStoreActions, useStoreState }

export default store
