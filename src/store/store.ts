import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from './reducers/uiSlice'
import movieReducer from './reducers/movieSlice'

const rootReducer = combineReducers({
  uiReducer,
  movieReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
