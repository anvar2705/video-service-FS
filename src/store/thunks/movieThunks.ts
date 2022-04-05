import { AppDispatch } from '../store'
import { movieAPI } from 'api/api'
import { setMovies } from '../reducers/movieSlice'

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
