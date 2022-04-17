import React, { FC } from 'react'
import s from './MovieItem.module.scss'

interface IMovieItemProps {
  imageSrc: string
  name: string
  description: string
}

const MovieItem: FC<IMovieItemProps> = ({ imageSrc, name, description }) => {
  return (
    <div className={s.movieItem}>
      <div className={s.movieItem__image}>
        <img src={require(`assets/images/movie${imageSrc}.png`)} alt={name} />
      </div>
      <div className={s.movieItem__name}>{name}</div>
      <div className={s.movieItem__description}>{description}</div>
    </div>
  )
}

export default MovieItem
