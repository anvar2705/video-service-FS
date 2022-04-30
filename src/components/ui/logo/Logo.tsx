import React from 'react'
import logo from 'assets/images/logo.svg'

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '182px',
        height: '36px',
      }}
    >
      <img src={logo} alt='logo' />
      <div style={{ fontSize: '20px', fontWeight: 500, lineHeight: '23.7px' }}>Видеосервис</div>
    </div>
  )
}

export default Logo
