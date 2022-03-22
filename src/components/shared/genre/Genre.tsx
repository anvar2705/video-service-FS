import React, { FC } from 'react'
import s from './Genre.module.scss'

interface IGenreProps {
  image: string
  title: string
}

const Genre: FC<IGenreProps> = ({ image, title }) => {
  return (
    <div className={s.genre}>
      <div className={s.genre__image}>{image}</div>
      <div className={s.genre__title}>{title}</div>
    </div>
  )
}

export default Genre
