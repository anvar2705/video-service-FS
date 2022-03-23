import React, { FormEvent, useState } from 'react'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/inputs/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import Tabs from 'components/shared/tabs/Tabs'
import { TABS } from 'constants/constants'
import Modal from 'components/shared/modal/Modal'
import Login from '../login/Login'

const MainPage = () => {
  const [modalActive, setModalActive] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    console.log(value)
  }
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} width={304} height={394}>
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
        <StyledButton
          onClick={() => {
            setModalActive(true)
          }}
        >
          Войти
        </StyledButton>
      </div>
      <Tabs items={TABS} />
    </>
  )
}

export default MainPage
