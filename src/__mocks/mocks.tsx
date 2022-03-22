import movie1 from 'assets/images/movie1.png'
import movie2 from 'assets/images/movie2.png'
import movie3 from 'assets/images/movie3.png'
import movie4 from 'assets/images/movie4.png'

export interface IMovieData {
  id: number
  title: string
  subtitle: string
  imageSrc: string
}

export const MOVIES: Array<IMovieData> = [
  {
    id: 1,
    title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    imageSrc: movie1,
  },
  {
    id: 2,
    title: 'Новый Бэтмен',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    imageSrc: movie2,
  },
  {
    id: 3,
    title: 'Однажды... в Голливуде',
    subtitle:
      'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    imageSrc: movie3,
  },
  {
    id: 4,
    title: 'Стриптизёрши',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    imageSrc: movie4,
  },
]

export interface IGenreData {
  id: number
  title: string
  image: string
}

export const GENRES: Array<IGenreData> = [
  {
    id: 1,
    title: 'Комедии',
    image: '😁',
  },
  {
    id: 2,
    title: 'Драмы',
    image: '😭',
  },
  {
    id: 3,
    title: 'Фантастика',
    image: '👽',
  },
  {
    id: 4,
    title: 'Ужасы',
    image: '👻',
  },
]
