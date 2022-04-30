import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import ChannelItem from 'components/screens/channels/channel-item/ChannelItem'
import CustomScrollbarCSS from 'components/ui/scrollbars/CustomScrollbarCSS'

interface IChannelsProps {
  channelsData: Array<IChannelsData>
}

const Channels: FC<IChannelsProps> = ({ channelsData }) => {
  return (
    <CustomScrollbarCSS height={696} style={{ marginBottom: '72px' }}>
      {channelsData.map((item) => (
        <ChannelItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          schedule={item.schedule}
        />
      ))}
    </CustomScrollbarCSS>
  )
}

export default Channels
