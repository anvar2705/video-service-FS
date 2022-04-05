import { AppDispatch } from 'store/store'
import { authAPI } from 'api/api'
import { setError, setIsAuth, setIsModalActive, setUsername } from 'store/reducers/uiSlice'

export const login =
  (username: string, password: string, isRemember: boolean) => async (dispatch: AppDispatch) => {
    try {
      const response = await authAPI.login(username, password)
      if (response.data) {
        dispatch(setUsername(response.data.username))
        dispatch(setIsAuth(true))
        dispatch(setIsModalActive(false))
        if (isRemember) window.localStorage.setItem('videoServiceToken', response.data.token)
      }
    } catch (e) {
      console.log(e)
      // dispatch(setError(e))
    }
  }

export const auth = () => async (dispatch: AppDispatch) => {
  const token = window.localStorage.getItem('videoServiceToken')
  if (token) {
    try {
      const response = await authAPI.auth()
      if (response.data) {
        dispatch(setUsername(response.data.username))
        dispatch(setIsAuth(true))
        dispatch(setIsModalActive(false))
        window.localStorage.setItem('videoServiceToken', response.data.token)
      }
    } catch (e) {
      console.log(e)
      window.localStorage.removeItem('videoServiceToken')
    }
  }
}

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(setUsername(''))
  dispatch(setIsAuth(false))
  window.localStorage.removeItem('videoServiceToken')
}
