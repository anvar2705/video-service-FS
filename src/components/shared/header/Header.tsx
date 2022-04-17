import React, { FormEvent } from 'react'
import Modal from 'components/shared/modal/Modal'
import { setIsModalActive } from 'store/reducers/uiSlice'
import Login from 'components/screens/login/Login'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/inputs/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import { logout } from 'store/thunks/authThunks'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { isAuth, username, isModalActive } = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()

  const onSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    console.log(value)
  }

  return (
    <div>
      <Modal
        active={isModalActive}
        setActive={(status: boolean) => {
          dispatch(setIsModalActive(status))
        }}
        width={304}
        height={394}
      >
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
        <Search onSubmit={onSubmit} />
        {isAuth ? (
          <div>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '19px',
              }}
            >
              {username}
            </span>
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
              dispatch(setIsModalActive(true))
            }}
          >
            Войти
          </StyledButton>
        )}
      </div>
    </div>
  )
}

export default Header
