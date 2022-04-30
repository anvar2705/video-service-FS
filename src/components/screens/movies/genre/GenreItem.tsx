import React, { FC } from 'react'
import s from './GenreItem.module.scss'

interface IGenreProps {
  image: string
  title: string
}

const GenreItem: FC<IGenreProps> = ({ image, title }) => {
  return (
    <div className={s.root}>
      <div className={s.image}>{image}</div>
      <div className={s.title}>{title}</div>
    </div>
  )
}

export default GenreItem
