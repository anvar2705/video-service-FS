import React, { FC } from 'react'
import { IChannelsData } from '__mocks/mocks'
import ChannelItem from 'components/shared/channel-item/ChannelItem'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

interface IChannelsProps {
  channelsData: Array<IChannelsData>
}

const Channels: FC<IChannelsProps> = ({ channelsData }) => {
  return (
    <SimpleBar style={{ height: '696px', marginBottom: '72px' }}>
      {channelsData.map((item) => (
        <ChannelItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          schedule={item.schedule}
        />
      ))}
    </SimpleBar>
  )
}

export default Channels
