import { AppDispatch } from '../store'
import { API } from 'api/api'
import { addComment, deleteComment, setMovies, setOneMovie } from '../reducers/movieSlice'
import { setIsLoading } from 'store/reducers/uiSlice'
import { popupErrorCommon } from 'components/shared/pop-ups/PopUps'

export const getMoviesThunk = (searchValue?: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true))
    let response
    if (searchValue) response = await API.searchMovie(searchValue)
    else response = await API.getMovies()
    if (response.data) {
      dispatch(setMovies(response.data))
      dispatch(setIsLoading(false))
    }
  } catch (e: any) {
    popupErrorCommon(e, e.response.data.message)
    console.log(e)
  }
}

export const getOneMovieThunk = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await API.getOneMovie(id)
    if (response.data) {
      dispatch(setOneMovie(response.data))
      dispatch(setIsLoading(false))
    }
  } catch (e: any) {
    popupErrorCommon(e, e.response.data.message)
    console.log(e)
  }
}

export const postCommentThunk =
  (commentValue: string, movieId: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await API.postComment(commentValue, movieId)
      if (response.data) {
        dispatch(addComment(response.data))
      }
    } catch (e: any) {
      popupErrorCommon(e, e.response.data.message)
      console.log(e)
    }
  }

export const deleteCommentThunk = (commentId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.deleteComment(commentId)
    if (response.data) {
      dispatch(deleteComment(response.data))
    }
  } catch (e: any) {
    popupErrorCommon(e, e.response.data.message)
    console.log(e)
  }
}
