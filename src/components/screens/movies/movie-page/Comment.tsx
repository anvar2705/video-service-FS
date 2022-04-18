import React, { FC, useEffect, useState } from 'react'
import { IComment } from 'models/models'
import { API } from 'api/api'
import { ReactComponent as DeleteIcon } from 'assets/images/deleteIcon.svg'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { deleteCommentThunk } from 'store/thunks/movieThunks'
import s from 'components/screens/movies/movie-page/MoviePage.module.scss'

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
  const [username, setUsername] = useState('')
  const { userId } = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUsername = async (userId: number) => {
      try {
        const response = await API.getUsername(userId)
        setUsername(response.data.username)
      } catch (e) {
        console.log(e)
      }
    }

    getUsername(comment.userId)

    return () => {
      setUsername('')
    }
  }, [comment])

  const onDeleteComment = () => {
    dispatch(deleteCommentThunk(comment.id))
  }

  return (
    <div className={s.comments__item}>
      <div className={s.comments__username}>{username}</div>
      {comment.value}
      {userId === comment.userId ? (
        <DeleteIcon className={s.comments__deleteIcon} onClick={onDeleteComment} />
      ) : null}
    </div>
  )
}

export default Comment
