import React, { FC } from 'react'
import s from './MovieItem.module.scss'

interface IMovieItemProps {
  imageSrc: string
  name: string
  description: string
}

const MovieItem: FC<IMovieItemProps> = ({ imageSrc, name, description }) => {
  return (
    <div className={s.root}>
      <div className={s.image}>
        <img src={require(`assets/images/movie${imageSrc}.png`)} alt={name} />
      </div>
      <div className={s.name}>{name}</div>
      <div className={s.description}>{description}</div>
    </div>
  )
}

export default MovieItem
