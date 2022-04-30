import React from 'react'
import logoFooter from 'assets/images/logoFooter.svg'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <img src={logoFooter} alt='logo footer' className={s.logo} />
        <div>
          <div className={s.address}>
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
          </div>
          <div className={s.phone}>+7 (3412) 93-88-61, 43-29-29</div>
          <div className={s.url}>htc-cs.ru</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
