import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Comment from 'components/screens/movies/comment/Comment'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import StyledButton from 'components/shared/buttons/StyledButton'
import StyledInputComment from 'components/shared/inputs/inputComment/StyledInputComment'
import s from './MoviePage.module.scss'
import { ReactComponent as GoBackIcon } from 'assets/images/goBack.svg'
import { getOneMovieThunk, postCommentThunk } from 'store/thunks/movieThunks'
import MovieInfoItem from '../movie-info-item/MovieInfoItem'

const MoviePage = () => {
  const [commentValue, setCommentValue] = useState('')
  const { movie } = useAppSelector((state) => state.movieReducer)
  const { isLoading, isAuth } = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) dispatch(getOneMovieThunk(Number(id)))
  }, [id, dispatch])

  const onPostComment = async () => {
    dispatch(postCommentThunk(commentValue, movie.id))
    setCommentValue('')
  }

  return (
    <div className={s.root}>
      <GoBackIcon
        className={s.root__goBackIcon}
        onClick={() => {
          navigate('/')
        }}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={s.movie}>
            <div className={s.image}>
              <img
                src={
                  movie.id === 0
                    ? require(`assets/images/noImage.png`)
                    : require(`assets/images/movie${movie.id}.png`)
                }
                alt={movie.name}
              />
            </div>
            <div>
              <MovieInfoItem title='Название: ' subtitle={movie.name} />
              <MovieInfoItem title='Страна: ' subtitle={movie.countries} />
              <MovieInfoItem title='Жанр: ' subtitle={movie.genres} />
              <div>{movie.description}</div>
            </div>
          </div>
          <div className={s.comments}>
            <div className={s.title}>Комментарии</div>
            {isAuth ? (
              <div className={s.inputWrapper}>
                <StyledInputComment
                  name='comment'
                  id='comment'
                  placeholder='Введите комментарий...'
                  value={commentValue}
                  onChange={(event) => setCommentValue(event.target.value)}
                  className={s.input}
                />
                <StyledButton onClick={onPostComment}>Опубликовать</StyledButton>
              </div>
            ) : null}
            {movie.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MoviePage
