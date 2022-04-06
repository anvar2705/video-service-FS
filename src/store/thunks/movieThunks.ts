import { AppDispatch } from '../store'
import { movieAPI } from 'api/api'
import { setMovies, setOneMovie } from '../reducers/movieSlice'

export const getMovies = () => async (dispatch: AppDispatch) => {
  try {
    const response = await movieAPI.getMovies()
    if (response.data) {
      dispatch(setMovies(response.data))
    }
  } catch (e) {
    console.log(e)
  }
}

export const getOneMovie = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await movieAPI.getOneMovie(id)
    if (response.data) {
      dispatch(setOneMovie(response.data))
    }
  } catch (e) {
    console.log(e)
  }
}
