import React, { FormEvent } from 'react'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/inputs/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import Tabs from 'components/shared/tabs/Tabs'
import { TABS } from 'constants/constants'
import Modal from 'components/shared/modal/Modal'
import Login from '../login/Login'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setIsModalActive } from 'store/reducers/uiSlice'
import { logout } from 'store/thunks/authThunks'

const MainPage = () => {
  const { isAuth, username, isModalActive } = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()

  const onSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    console.log(value)
  }

  return (
    <>
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
        <Logo />
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
      <Tabs items={TABS} />
    </>
  )
}

export default MainPage
