import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export const authAPI = {
  registration(username: string, password: string) {
    return instance.post('/user/registration', { username, password })
  },
  login(username: string, password: string) {
    return instance.post('/user/login', { username, password })
  },
  auth() {
    return instance.get('/user/auth', {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('videoServiceToken')}` },
    })
  },
}

export const movieAPI = {
  getMovies() {
    return instance.get('/movie')
  },
}
