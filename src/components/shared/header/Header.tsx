import React, { FormEvent, useEffect, useState } from 'react'
import Modal from 'components/shared/modal/Modal'
import Login from 'components/screens/login/Login'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/header/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import { changeUsername, logout } from 'store/thunks/authThunks'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { NavLink } from 'react-router-dom'
import StyledInput from 'components/shared/inputs/input/StyledInput'
import s from './Header.module.scss'

const Header = () => {
  const [isModalLoginActive, setIsModalLoginActive] = useState(false)
  const [isEditUsername, setIsEditUsername] = useState(false)
  const { isAuth, username } = useAppSelector((state) => state.uiReducer)
  const [usernameInput, setUsernameInput] = useState(username ?? '')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isAuth) setIsModalLoginActive(false)
  }, [isAuth])

  useEffect(() => {
    setUsernameInput(username)
  }, [username])

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>, value: string) => {
    console.log(value)
  }

  return (
    <>
      <Modal active={isModalLoginActive} setActive={setIsModalLoginActive} width={304} height={394}>
        <Login />
      </Modal>
      <div className={s.header}>
        <NavLink to='/' className={s.header__logo}>
          <Logo />
        </NavLink>
        <Search onSubmit={onSubmitSearch} />
        {isAuth ? (
          <div className={s.header__username}>
            {isEditUsername ? (
              <StyledInput
                value={usernameInput}
                onChange={(event) => setUsernameInput(event.target.value)}
                autoFocus={true}
                onBlur={() => {
                  setIsEditUsername(false)
                  if (username !== usernameInput) dispatch(changeUsername(usernameInput))
                }}
              />
            ) : (
              <span onClick={() => setIsEditUsername(true)}>{username}</span>
            )}
            <StyledButton
              color='secondary'
              onClick={() => {
                dispatch(logout())
              }}
            >
              Выйти
            </StyledButton>
          </div>
        ) : (
          <StyledButton
            onClick={() => {
              setIsModalLoginActive(true)
            }}
          >
            Войти
          </StyledButton>
        )}
      </div>
    </>
  )
}

export default Header
