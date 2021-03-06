import { AppDispatch } from 'store/store'
import { API } from 'api/api'
import { setError, setIsAuth, setUserId, setUsername } from 'store/reducers/uiSlice'
import { popupErrorCommon } from 'components/ui/pop-ups/PopUps'

export const login =
  (username: string, password: string, isRemember: boolean) => async (dispatch: AppDispatch) => {
    try {
      const response = await API.login(username, password)
      if (response.data) {
        dispatch(setUserId(response.data.id))
        dispatch(setUsername(response.data.username))
        dispatch(setIsAuth(true))
        if (isRemember) window.localStorage.setItem('videoServiceToken', response.data.token)
        dispatch(setError({}))
      }
    } catch (e: any) {
      dispatch(setError(e.response.data))
      return popupErrorCommon(e, e.response.data.message)
    }
  }

export const auth = () => async (dispatch: AppDispatch) => {
  const token = window.localStorage.getItem('videoServiceToken')
  if (token) {
    try {
      const response = await API.auth()
      if (response.data) {
        dispatch(setUserId(response.data.id))
        dispatch(setUsername(response.data.username))
        dispatch(setIsAuth(true))
        window.localStorage.setItem('videoServiceToken', response.data.token)
        dispatch(setError({}))
      }
    } catch (e: any) {
      dispatch(setError(e.response.data))
      window.localStorage.removeItem('videoServiceToken')
      return popupErrorCommon(e, e.response.data.message)
    }
  }
}

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(setUserId(null))
  dispatch(setUsername(''))
  dispatch(setIsAuth(false))
  window.localStorage.removeItem('videoServiceToken')
}

export const changeUsername = (username: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.changeUsername(username)
    if (response.data) {
      dispatch(setUserId(response.data.id))
      dispatch(setUsername(response.data.username))
      window.localStorage.setItem('videoServiceToken', response.data.token)
      dispatch(setError({}))
    }
  } catch (e: any) {
    dispatch(setError(e.response.data))
    return popupErrorCommon(e, e.response.data.message)
  }
}
