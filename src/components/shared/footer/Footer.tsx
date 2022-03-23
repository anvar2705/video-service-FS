import React, { FC } from 'react'
import logoFooter from 'assets/images/logo-footer.svg'
import s from './Footer.module.scss'

interface IFooterProps {
  maxWidth: number
}

const Footer: FC<IFooterProps> = ({ maxWidth }) => {
  const paddingLeftRight = (window.innerWidth - maxWidth) / 2
  return (
    <div className={s.footer} style={{ padding: `22px ${paddingLeftRight}px` }}>
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
