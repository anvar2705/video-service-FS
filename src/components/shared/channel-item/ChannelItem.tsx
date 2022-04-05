import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import s from './ChannelItem.module.scss'
import classNames from 'classnames'

const ChannelItem: FC<IChannelsData> = ({ title, imageSrc, schedule }) => {
  return (
    <div className={s.channelItem}>
      <div className={s.channelItem__logo}>
        <img src={imageSrc} alt={`${title}-logo`} />
      </div>
      <div className={s.channelItem__info}>
        <div className={s.channelItem__title}>{title}</div>
        <div className={s.channelItem__schedule}>
          {schedule.map((item) => (
            <div
              key={item.id}
              className={classNames(s.channelItem__scheduleItem, { [s.active]: item.id === 0 })}
            >
              <span className={s.channelItem__scheduleItemTime}>{item.time}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelItem
