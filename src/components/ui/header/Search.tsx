import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import StyledButton from 'components/ui/buttons/StyledButton'
import StyledInput from 'components/ui/inputs/input/StyledInput'
import s from 'components/ui/header/Header.module.scss'

interface ISearchProps {
  onSubmit: (event: FormEvent<HTMLFormElement>, value: string) => void
  placeholder?: string
  [key: string]: any
}

const Search: FC<ISearchProps> = ({ onSubmit, placeholder = 'Поиск...', ...props }) => {
  const [value, setValue] = useState('')

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event, value)
      }}
      className={s.search}
      {...props}
    >
      <StyledInput value={value} onChange={onHandleChange} placeholder={placeholder} />
      <StyledButton type='submit' color='secondary'>
        Найти
      </StyledButton>
    </form>
  )
}

export default Search
