import React, { ChangeEvent, FC } from 'react'
import s from './Checkbox.module.scss'

interface CheckboxProps {
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <>
      <input
        type='checkbox'
        className={s.customCheckbox}
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
