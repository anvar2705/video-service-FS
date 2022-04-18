import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ICountry, IGenre } from 'models/models'
import Comment from 'components/screens/movies/movie-page/Comment'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import StyledButton from 'components/shared/buttons/StyledButton'
import StyledInputComment from 'components/shared/inputs/inputComment/StyledInputComment'
import s from './MoviePage.module.scss'
import { ReactComponent as GoBackIcon } from 'assets/images/goBack.svg'
import { getOneMovieThunk, postCommentThunk } from 'store/thunks/movieThunks'

const MoviePage = () => {
  const [commentValue, setCommentValue] = useState('')
  const { movie } = useAppSelector((state) => state.movieReducer)
  const { isLoading, isAuth } = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) dispatch(getOneMovieThunk(Number(id)))
  }, [id])

  const onPostComment = async () => {
    dispatch(postCommentThunk(commentValue, movie.id))
    setCommentValue('')
  }

  return (
    <div className={s.moviePageContainer}>
      <GoBackIcon
        className={s.moviePageContainer__goBackIcon}
        onClick={() => {
          navigate('/')
        }}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={s.movie}>
            <div className={s.movie__image}>
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
            <div className={s.comments__title}>Комментарии</div>
            {isAuth ? (
              <div className={s.comments__inputWrapper}>
                <StyledInputComment
                  name='comment'
                  id='comment'
                  placeholder='Введите комментарий...'
                  value={commentValue}
                  onChange={(event) => setCommentValue(event.target.value)}
                  className={s.comments__input}
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

const MovieInfoItem: FC<{ title: string; subtitle: string | Array<ICountry | IGenre> }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={s.movieInfoItem}>
      <div className={s.movieInfoItem__title}>{title}</div>
      <div className={s.movieInfoItem__subtitle}>
        {typeof subtitle === 'string' ? (
          <span style={{ fontWeight: 500 }}>{subtitle}</span>
        ) : (
          subtitle.map((item, index) => (
            <span key={item.id}>
              {item.value}
              {subtitle.length === index + 1 ? null : ', '}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
