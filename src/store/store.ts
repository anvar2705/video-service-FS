import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  uiReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
