import React, { FC } from 'react'
import s from './MovieItem.module.scss'

interface IMovieItemProps {
  imageSrc: string
  title: string
  subtitle: string
}

const MovieItem: FC<IMovieItemProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className={s.movieItem}>
      <div className={s.movieItem__image}>
        <img src={require(`assets/images/movie${imageSrc}.png`)} alt={title} />
      </div>
      <div className={s.movieItem__title}>{title}</div>
      <div className={s.movieItem__subtitle}>{subtitle}</div>
    </div>
  )
}

export default MovieItem
