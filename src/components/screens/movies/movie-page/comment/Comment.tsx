import React, { FC, useEffect, useState } from 'react'
import { IComment } from 'models/models'
import scss from 'assets/scss/variables.module.scss'
import { API } from 'api/api'
import { ReactComponent as DeleteIcon } from 'assets/images/deleteIcon.svg'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { deleteCommentThunk } from 'store/thunks/movieThunks'

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
  }, [comment])

  const onDeleteComment = () => {
    dispatch(deleteCommentThunk(comment.id))
  }

  return (
    <div
      style={{
        backgroundColor: scss.colorBackground,
        borderRadius: '8px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '16px',
        marginBottom: '16px',
        position: 'relative',
      }}
    >
      <div style={{ fontWeight: 500, marginBottom: '8px' }}>{username}</div>
      {comment.value}
      {userId === comment.userId ? (
        <DeleteIcon
          style={{ position: 'absolute', top: 0, right: '-32px', cursor: 'pointer' }}
          onClick={onDeleteComment}
        />
      ) : null}
    </div>
  )
}

export default Comment
