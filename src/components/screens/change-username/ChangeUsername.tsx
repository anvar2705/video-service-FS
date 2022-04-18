import React, { useEffect, useState } from 'react'
import StyledInput from 'components/shared/inputs/input/StyledInput'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import ModalStyledWindow from 'components/shared/modal-styled-window/ModalStyledWindow'
import { changeUsername } from 'store/thunks/authThunks'

const ChangeUsername = () => {
  const { username } = useAppSelector((state) => state.uiReducer)
  const [usernameInput, setUsernameInput] = useState(username ?? '')
  const dispatch = useAppDispatch()

  useEffect(() => {
    setUsernameInput(username)
  }, [username])

  const onHandleClick = () => {
    if (username !== usernameInput) dispatch(changeUsername(usernameInput))
  }

  return (
    <ModalStyledWindow title='Изменить имя' btnTitle='Изменить' onBtnClick={onHandleClick}>
      <StyledInput
        placeholder='Имя'
        type='text'
        value={usernameInput}
        onChange={(event) => {
          setUsernameInput(event.target.value)
        }}
      />
    </ModalStyledWindow>
  )
}

export default ChangeUsername
