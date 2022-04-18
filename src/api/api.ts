import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('videoServiceToken')}`,
  },
})

export const API = {
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
  getUsername(userId: number) {
    return instance.get(`/user?id=${userId}`)
  },
  changeUsername(username: string) {
    return instance.post(
      `/user`,
      { username },
      {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('videoServiceToken')}` },
      }
    )
  },
  getMovies() {
    return instance.get('/movie')
  },
  getOneMovie(id: number) {
    return instance.get(`/movie?id=${id}`)
  },
  searchMovie(name: string) {
    return instance.get(`/movie?search=${name}`)
  },
  postComment(commentValue: string, movieId: number) {
    return instance.post(
      '/comment',
      { value: commentValue, movieId },
      {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('videoServiceToken')}` },
      }
    )
  },
  deleteComment(id: number) {
    return instance.delete(`/comment/${id}`, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('videoServiceToken')}` },
    })
  },
}
