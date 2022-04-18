import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from 'components/screens/main-page/MainPage'
import Page404 from 'components/shared/page404/Page404'
import Footer from 'components/shared/footer/Footer'
import { useAppDispatch } from 'hooks/redux'
import { auth } from 'store/thunks/authThunks'
import MoviePage from 'components/screens/movies/movie-page/MoviePage'
import Header from 'components/shared/header/Header'
import s from './App.module.scss'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <>
      <div className={s.App}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:id' element={<MoviePage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
