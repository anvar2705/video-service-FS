import React, { FC } from 'react'
import { IGenreData, IMovieData } from '__mocks/mocks'
import s from './Movies.module.scss'
import MovieItem from 'components/shared/movie-item/MovieItem'
import Genre from 'components/shared/genre/Genre'

interface IMoviesProps {
  moviesData: Array<IMovieData>
  genresData: Array<IGenreData>
}

const Movies: FC<IMoviesProps> = ({ moviesData, genresData }) => {
  return (
    <>
      <div className={s.title}>🔥 Новинки</div>
      <div className={s.movies}>
        {moviesData.length !== 0 ? (
          moviesData.map((item) => (
            <MovieItem
              imageSrc={item.imageSrc}
              title={item.title}
              subtitle={item.subtitle}
              key={item.id}
            />
          ))
        ) : (
          <span>Нет фильмов</span>
        )}
      </div>
      <div className={s.title}>Жанры</div>
      <div className={s.genres}>
        {genresData.length !== 0 ? (
          genresData.map((item) => <Genre image={item.image} title={item.title} key={item.id} />)
        ) : (
          <span>Нет жанров</span>
        )}
      </div>
    </>
  )
}

export default Movies
