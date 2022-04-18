import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IComment, IMovie } from 'models/models'

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
      state.movie.comments.sort((a, b) => b.id - a.id)
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      state.movie.comments.unshift(action.payload)
    },
    deleteComment: (state, action: PayloadAction<IComment>) => {
      const id = action.payload.id
      const index = state.movie.comments.findIndex((comment) => comment.id === id)
      state.movie.comments.splice(index, 1)
    },
  },
})

export default movieSlice.reducer
export const { setMovies, setOneMovie, addComment, deleteComment } = movieSlice.actions
