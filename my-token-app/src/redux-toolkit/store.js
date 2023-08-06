import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice/app'

const thunkArguments = {
  store: null
}

export const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunkArguments
      },
      serializableCheck: {
        ignoredActions: [],
        ignoredPaths: []
      }
    })
})

thunkArguments.store = store
