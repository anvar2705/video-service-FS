import React, { ChangeEvent, FC } from 'react'
import s from './Checkbox.module.scss'

interface ICheckboxProps {
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
}

const Checkbox: FC<ICheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <>
      <input
        type='checkbox'
        className={s.root}
        id='custom checkbox'
        name='custom checkbox'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor='custom checkbox'>{label}</label>
    </>
  )
}

export default Checkbox
