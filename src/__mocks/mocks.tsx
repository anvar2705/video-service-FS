import channel1 from 'assets/images/channel1.svg'
import channel2 from 'assets/images/channel2.svg'
import channel3 from 'assets/images/channel3.svg'
import channel4 from 'assets/images/channel4.svg'

export interface IGenreData {
  id: number
  title: string
  image: string
}

export const GENRES: Array<IGenreData> = [
  {
    id: 0,
    title: 'Комедии',
    image: '😁',
  },
  {
    id: 1,
    title: 'Драмы',
    image: '😭',
  },
  {
    id: 2,
    title: 'Фантастика',
    image: '👽',
  },
  {
    id: 3,
    title: 'Ужасы',
    image: '👻',
  },
]

export interface IChannelsData {
  id: number
  title: string
  imageSrc: string
  schedule: Array<{ id: number; time: string; title: string }>
}

export const CHANNELS: Array<IChannelsData> = [
  {
    id: 0,
    title: 'Первый канал',
    imageSrc: channel1,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'Новости (с субтитрами)',
      },
      {
        id: 1,
        time: '14:00',
        title: 'Давай поженимся',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Другие новости',
      },
    ],
  },
  {
    id: 1,
    title: '2x2',
    imageSrc: channel2,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
      },
      {
        id: 1,
        time: '14:00',
        title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
      },
      {
        id: 2,
        time: '15:00',
        title: 'БУРДАШЕВ. Сезон 1, 20 серия',
      },
    ],
  },
  {
    id: 2,
    title: 'РБК',
    imageSrc: channel3,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
      },
      {
        id: 1,
        time: '14:00',
        title: 'ДЕНЬ. Главные темы',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Главные новости',
      },
    ],
  },
  {
    id: 3,
    title: 'AMEDIA PREMIUM',
    imageSrc: channel4,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'Клиент всегда мёртв',
      },
      {
        id: 1,
        time: '14:00',
        title: 'Голодные игры: Сойка-пересмешница. Часть I',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Секс в большом городе',
      },
    ],
  },
  {
    id: 4,
    title: 'Первый канал',
    imageSrc: channel1,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'Новости (с субтитрами)',
      },
      {
        id: 1,
        time: '14:00',
        title: 'Давай поженимся',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Другие новости',
      },
    ],
  },
  {
    id: 5,
    title: '2x2',
    imageSrc: channel2,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
      },
      {
        id: 1,
        time: '14:00',
        title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
      },
      {
        id: 2,
        time: '15:00',
        title: 'БУРДАШЕВ. Сезон 1, 20 серия',
      },
    ],
  },
  {
    id: 6,
    title: 'РБК',
    imageSrc: channel3,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
      },
      {
        id: 1,
        time: '14:00',
        title: 'ДЕНЬ. Главные темы',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Главные новости',
      },
    ],
  },
  {
    id: 7,
    title: 'AMEDIA PREMIUM',
    imageSrc: channel4,
    schedule: [
      {
        id: 0,
        time: '13:00',
        title: 'Клиент всегда мёртв',
      },
      {
        id: 1,
        time: '14:00',
        title: 'Голодные игры: Сойка-пересмешница. Часть I',
      },
      {
        id: 2,
        time: '15:00',
        title: 'Секс в большом городе',
      },
    ],
  },
]
