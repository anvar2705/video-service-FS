import React, { useState } from 'react'
import StyledInput from 'components/shared/inputs/input/StyledInput'
import Checkbox from 'components/shared/checkboxes/Checkbox'
import { login } from 'store/thunks/authThunks'
import { useAppDispatch } from 'hooks/redux'
import ModalStyledWindow from 'components/shared/modal-styled-window/ModalStyledWindow'

const Login = () => {
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [isRemember, setIsRemember] = useState(false)
  const dispatch = useAppDispatch()

  const onHandleClick = () => {
    dispatch(login(username, pass, isRemember))
  }

  return (
    <ModalStyledWindow title='Вход' btnTitle='Войти' onBtnClick={onHandleClick}>
      <StyledInput
        placeholder='Логин'
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
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
    </ModalStyledWindow>
  )
}

export default Login
