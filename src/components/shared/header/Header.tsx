import React, { FormEvent, useEffect, useState } from 'react'
import Modal from 'components/shared/modal/Modal'
import Login from 'components/screens/login/Login'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/inputs/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import { changeUsername, logout } from 'store/thunks/authThunks'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { NavLink } from 'react-router-dom'
import StyledInput from 'components/shared/inputs/input/StyledInput'

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '38px',
          marginBottom: '48px',
        }}
      >
        <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo />
        </NavLink>
        <Search onSubmit={onSubmitSearch} />
        {isAuth ? (
          <div
            style={{ width: '220px', display: 'flex', justifyContent: 'end', alignItems: 'center' }}
          >
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
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '19px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsEditUsername(true)}
              >
                {username}
              </span>
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
