import React, { FC } from 'react'
import s from '../Movies.module.scss'

interface IGenreProps {
  image: string
  title: string
}

const Genre: FC<IGenreProps> = ({ image, title }) => {
  return (
    <div className={s.genreItem}>
      <div className={s.genreItem__image}>{image}</div>
      <div className={s.genreItem__title}>{title}</div>
    </div>
  )
}

export default Genre
