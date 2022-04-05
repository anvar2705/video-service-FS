import React, { FC, useEffect } from 'react'
import { IGenreData } from '__mocks/mocks'
import s from './Movies.module.scss'
import MovieItem from './movie-item/MovieItem'
import Genre from 'components/shared/genre/Genre'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { getMovies } from 'store/thunks/movieThunks'

interface IMoviesProps {
  genresData: Array<IGenreData>
}

const Movies: FC<IMoviesProps> = ({ genresData }) => {
  const { movies } = useAppSelector((state) => state.movieReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <>
      <div className={s.title}>🔥 Новинки</div>
      <div className={s.movies}>
        {movies.length !== 0 ? (
          movies.map((movie) => (
            <MovieItem
              imageSrc={movie.image}
              title={movie.name}
              subtitle={movie.description}
              key={movie.id}
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
