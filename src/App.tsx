import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Movies from './components/screens/movies/Movies'
import Movie from './components/screens/movies/movie/Movie'
import Channels from './components/screens/channels/Channels'

const App = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/movies' />} />
    <Route path='/movies' element={<Movies />} />
    <Route path='/movies/:id' element={<Movie />} />
    <Route path='/channels' element={<Channels />} />
  </Routes>
)

export default App
