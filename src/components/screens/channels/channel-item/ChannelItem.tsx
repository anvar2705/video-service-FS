import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import s from './ChannelItem.module.scss'
import classNames from 'classnames'

const ChannelItem: FC<IChannelsData> = ({ title, imageSrc, schedule }) => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <img src={imageSrc} alt={`${title}-logo`} />
      </div>
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.schedule}>
          {schedule.map((item) => (
            <div
              key={item.id}
              className={classNames(s.scheduleItem, { [s.active]: item.id === 0 })}
            >
              <span className={s.scheduleItemTime}>{item.time}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelItem
