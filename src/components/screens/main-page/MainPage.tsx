import React from 'react'
import Tabs from 'components/shared/tabs/Tabs'
import Movies from '../movies/Movies'
import { CHANNELS, GENRES } from '__mocks/mocks'
import Channels from '../channels/Channels'

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
