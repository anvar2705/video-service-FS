import React from 'react'
import logoFooter from 'assets/images/logo-footer.svg'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footer}>
      <img src={logoFooter} alt='logo footer' className={s.footer__logo} />
      <div className={s.footer__title}>
        <div className={s.footer__title_address}>
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
        </div>
        <div className={s.footer__title_phone}>+7 (3412) 93-88-61, 43-29-29</div>
        <div className={s.footer__title_url}>htc-cs.ru</div>
      </div>
    </div>
  )
}

export default Footer
