import { ReactNode } from 'react'
import Movies from 'components/screens/movies/Movies'
import Channels from 'components/screens/channels/Channels'
import { CHANNELS, GENRES, MOVIES } from '__mocks/mocks'

export interface ITabData {
  title: string
  content: ReactNode
}

export const TABS: Array<ITabData> = [
  { title: 'Фильмы', content: <Movies moviesData={MOVIES} genresData={GENRES} /> },
  { title: 'Телеканалы', content: <Channels channelsData={CHANNELS} /> },
]
