import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import ChannelItem from 'components/shared/channel-item/ChannelItem'

interface IChannelsProps {
  channelsData: Array<IChannelsData>
}

const Channels: FC<IChannelsProps> = ({ channelsData }) => {
  return (
    <div
      style={{ maxHeight: '696px', overflow: 'scroll', marginBottom: '72px', overflowX: 'hidden' }}
    >
      {channelsData.map((item) => (
        <ChannelItem
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          schedule={item.schedule}
        />
      ))}
    </div>
  )
}

export default Channels
