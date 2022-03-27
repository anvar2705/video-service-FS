import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export const authAPI = {
  registration(username: string, password: string) {
    return instance.post('/auth/registration', { username, password })
  },
  login(username: string, password: string) {
    return instance.post('/auth/login', { username, password })
  },
  auth() {
    return instance.get('/auth/auth', {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('videoServiceToken')}` },
    })
  },
  getUsers(username: string, password: string) {
    return instance.get('/auth/users')
  },
}
