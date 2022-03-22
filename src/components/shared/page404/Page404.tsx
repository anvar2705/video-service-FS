import React from 'react'
import Page404Image from 'assets/images/page-404.png'

const Page404 = () => {
  return (
    <div style={{ marginTop: '60px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px', color: '#777', fontSize: '60px' }}>
        Страница не нaйдена
      </div>
      <img style={{ width: '500px' }} src={Page404Image} alt='Page not found' />
    </div>
  )
}

export default Page404
