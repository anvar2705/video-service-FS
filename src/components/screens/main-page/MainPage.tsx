import React from 'react'
import Tabs from 'components/ui/tabs/Tabs'
import Movies from 'components/screens/movies/Movies'
import { CHANNELS, GENRES } from '__mocks/mocks'
import Channels from 'components/screens/channels/Channels'

const MainPage = () => {
  return (
    <Tabs
      items={[
        { title: 'Фильмы', content: <Movies genresData={GENRES} /> },
        { title: 'Телеканалы', content: <Channels channelsData={CHANNELS} /> },
      ]}
    />
  )
}

export default MainPage
