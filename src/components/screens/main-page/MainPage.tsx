import React, { FormEvent } from 'react'
import Logo from 'components/shared/logo/Logo'
import Search from 'components/shared/inputs/search/Search'
import StyledButton from 'components/shared/buttons/StyledButton'
import Tabs from 'components/shared/tabs/Tabs'
import { TABS } from 'components/constants/constants'

const MainPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    console.log(value)
  }
  return (
    <>
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
        <StyledButton>Войти</StyledButton>
      </div>
      <Tabs items={TABS} />
    </>
  )
}

export default MainPage
