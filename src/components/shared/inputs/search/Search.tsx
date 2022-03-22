import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import StyledButton from 'components/shared/buttons/StyledButton'
import StyledInput from '../input/StyledInput'

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
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      {...props}
    >
      <StyledInput
        value={value}
        onChange={onHandleChange}
        placeholder={placeholder}
        style={{ width: '320px' }}
      />
      <StyledButton type='submit' color='secondary'>
        Найти
      </StyledButton>
    </form>
  )
}

export default Search
