import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import ChannelItem from 'components/screens/channels/channel-item/ChannelItem'
import CustomScrollbarJS from 'components/ui/scrollbars/CustomScrollbarJS'

interface IChannelsProps {
  channelsData: Array<IChannelsData>
}

const Channels: FC<IChannelsProps> = ({ channelsData }) => {
  return (
    <CustomScrollbarJS
      height={696}
      trackWidth={8}
      trackColor='#F2F2F2'
      trackBorderRadius={2}
      thumbWidth={4}
      thumbColor='#BDBDBD'
      thumbColorHover='#8d8d8d'
      thumbColorActive='#606060'
      style={{ marginBottom: '72px' }}
    >
      {channelsData.map((item) => (
        <ChannelItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          schedule={item.schedule}
        />
      ))}
    </CustomScrollbarJS>
  )
}

export default Channels
