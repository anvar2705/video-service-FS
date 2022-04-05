import React, { FC } from 'react'
import s from './Modal.module.scss'
import classNames from 'classnames'

interface IModalProps {
  active: boolean
  setActive: (status: boolean) => void
  width: number
  height?: number
}

const Modal: FC<IModalProps> = ({ active, setActive, width, height, children }) => {
  return (
    <div
      className={classNames(s.modal, { [s.active]: active })}
      onMouseDown={() => {
        setActive(false)
      }}
    >
      <div
        className={classNames(s.modal__content, { [s.active]: active })}
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseDown={(event) => {
          event.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
