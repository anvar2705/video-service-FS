import React, { FC } from 'react'
import { IGenreData, IMovieData } from '__mocks/mocks'
import s from './Movies.module.scss'
import MovieItem from '../../shared/movie-item/MovieItem'
import Genre from '../../shared/genre/Genre'

interface IMoviesProps {
  moviesData: Array<IMovieData>
  genresData: Array<IGenreData>
}

const Movies: FC<IMoviesProps> = ({ moviesData, genresData }) => {
  return (
    <>
      <div className={s.title}>🔥 Новинки</div>
      <div className={s.movies}>
        {moviesData.map((item) => (
          <MovieItem
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
            key={item.id}
          />
        ))}
      </div>
      <div className={s.title}>Жанры</div>
      <div className={s.genres}>
        {genresData.map((item) => (
          <Genre image={item.image} title={item.title} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Movies
