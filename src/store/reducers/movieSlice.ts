import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from 'models/models'

interface IMovieState {
  movies: Array<IMovie>
}

const initialState: IMovieState = {
  movies: [],
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Array<IMovie>>) => {
      state.movies = action.payload
    },
  },
})

export default movieSlice.reducer
export const { setMovies } = movieSlice.actions
