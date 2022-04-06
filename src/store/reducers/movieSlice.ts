import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from 'models/models'

interface IMovieState {
  movies: Array<IMovie>
  movie: IMovie
}

const initialState: IMovieState = {
  movies: [],
  movie: {
    id: 0,
    name: '',
    description: '',
    image: '',
    genres: [],
    comments: [],
    countries: [],
  },
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Array<IMovie>>) => {
      state.movies = action.payload
    },
    setOneMovie: (state, action: PayloadAction<IMovie>) => {
      state.movie = action.payload
    },
  },
})

export default movieSlice.reducer
export const { setMovies, setOneMovie } = movieSlice.actions
