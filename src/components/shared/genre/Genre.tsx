import React, { FC } from 'react'
import s from './Genre.module.scss'

interface IGenreProps {
  imageSrc: string
  title: string
}

const Genre: FC<IGenreProps> = ({ imageSrc, title }) => {
  return (
    <div className={s.genre}>
      <img src={imageSrc} alt={title} />
      <div className={s.genre__title}>{title}</div>
    </div>
  )
}

export default Genre
