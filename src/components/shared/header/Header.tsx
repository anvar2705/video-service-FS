import React, { FormEvent, useEffect, useState } from 'react'
import Modal from 'components/shared/modal/Modal'
import Login from 'components/screens/login/Login'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/header/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import { changeUsername, logout } from 'store/thunks/authThunks'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { NavLink, useNavigate } from 'react-router-dom'
import StyledInput from 'components/shared/inputs/input/StyledInput'
import s from './Header.module.scss'
import { getMoviesThunk } from 'store/thunks/movieThunks'

const Header = () => {
  const [isModalLoginActive, setIsModalLoginActive] = useState(false)
  const [isEditUsername, setIsEditUsername] = useState(false)
  const { isAuth, username } = useAppSelector((state) => state.uiReducer)
  const [usernameInput, setUsernameInput] = useState(username ?? '')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) setIsModalLoginActive(false)
  }, [isAuth])

  useEffect(() => {
    setUsernameInput(username)
  }, [username])

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>, value: string) => {
    navigate('/')
    dispatch(getMoviesThunk(value))
  }

  return (
    <>
      <Modal active={isModalLoginActive} setActive={setIsModalLoginActive} width={304} height={394}>
        <Login />
      </Modal>
      <div className={s.root}>
        <NavLink to='/' className={s.logo}>
          <Logo />
        </NavLink>
        <Search onSubmit={onSubmitSearch} />
        {isAuth ? (
          <div className={s.username}>
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
