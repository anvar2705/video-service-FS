import React, { FC, useEffect } from 'react'
import { IGenreData } from '__mocks/mocks'
import s from './Movies.module.scss'
import MovieItem from './movie-item/MovieItem'
import GenreItem from 'components/screens/movies/genre/GenreItem'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { getMoviesThunk } from 'store/thunks/movieThunks'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

interface IMoviesProps {
  genresData: Array<IGenreData>
}

const Movies: FC<IMoviesProps> = ({ genresData }) => {
  const { movies } = useAppSelector((state) => state.movieReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (movies.length === 0) dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <div className={s.title}>🔥 Новинки</div>
      <div className={s.section}>
        {movies.length !== 0 ? (
          movies.map((movie) => (
            <NavLink to={`/${movie.id}`} key={movie.id} className={s.link}>
              <MovieItem imageSrc={movie.image} name={movie.name} description={movie.description} />
            </NavLink>
          ))
        ) : (
          <span>Нет фильмов</span>
        )}
      </div>
      <div className={s.title}>Жанры</div>
      <div className={classNames(s.section, s.section__last)}>
        {genresData.length !== 0 ? (
          genresData.map((item) => (
            <GenreItem image={item.image} title={item.title} key={item.id} />
          ))
        ) : (
          <span>Нет жанров</span>
        )}
      </div>
    </>
  )
}

export default Movies
