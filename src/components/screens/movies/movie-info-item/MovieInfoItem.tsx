import React, { FC } from 'react'
import { ICountry, IGenre } from 'models/models'
import s from './MovieInfoItem.module.scss'

const MovieInfoItem: FC<{ title: string; subtitle: string | Array<ICountry | IGenre> }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={s.root}>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>
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

export default MovieInfoItem
