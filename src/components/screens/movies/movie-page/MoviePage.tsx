import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { getOneMovie } from 'store/thunks/movieThunks'

const MoviePage = () => {
  const { id } = useParams()
  const { movie } = useAppSelector((state) => state.movieReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (movie.id !== Number(id) || movie.name === '') dispatch(getOneMovie(Number(id)))
  }, [dispatch, movie, id])

  return <div>MoviePage: {movie.name}</div>
}

export default MoviePage
