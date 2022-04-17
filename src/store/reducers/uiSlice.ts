import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface uiState {
  userId: number | null
  username: string
  isAuth: boolean
  isLoading: boolean
  error: any
  isModalActive: boolean
}

const initialState: uiState = {
  userId: null,
  username: '',
  isAuth: false,
  isLoading: false,
  error: {},
  isModalActive: false,
}

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload
    },
    setIsModalActive: (state, action: PayloadAction<boolean>) => {
      state.isModalActive = action.payload
    },
  },
})

export default uiSlice.reducer
export const { setUserId, setUsername, setIsAuth, setIsLoading, setError, setIsModalActive } =
  uiSlice.actions
