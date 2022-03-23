import React, { useState } from 'react'
import StyledInput from 'components/shared/inputs/input/StyledInput'
import s from './Login.module.scss'
import StyledButton from 'components/shared/buttons/StyledButton'
import Checkbox from 'components/shared/checkboxes/Checkbox'

const Login = () => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isRemember, setIsRemember] = useState(false)

  const onHandleClick = () => {
    console.log(`Login: ${login}, pass: ${pass}, isRemember: ${isRemember}`)
  }

  return (
    <div className={s.login}>
      <div className={s.login__title}>Вход</div>
      <div className={s.login__form}>
        <StyledInput
          placeholder='Логин'
          value={login}
          onChange={(event) => {
            setLogin(event.target.value)
          }}
        />
        <StyledInput
          placeholder='Пароль'
          type='password'
          value={pass}
          onChange={(event) => {
            setPass(event.target.value)
          }}
        />
        <Checkbox
          checked={isRemember}
          onChange={(event) => {
            setIsRemember(event.target.checked)
          }}
          label='Запомнить'
        />
      </div>
      <StyledButton onClick={onHandleClick}>Войти</StyledButton>
    </div>
  )
}

export default Login
