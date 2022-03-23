import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from 'components/screens/main-page/MainPage'
import Page404 from 'components/shared/page404/Page404'
import Footer from './components/shared/footer/Footer'

const App = () => {
  const maxWidth = 1180
  return (
    <>
      <div style={{ maxWidth: `${maxWidth}px`, margin: '0 auto' }}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer maxWidth={maxWidth} />
    </>
  )
}

export default App
