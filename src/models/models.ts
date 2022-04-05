export interface ICountry {
  id: number
  value: string
  movie_country: {
    id: number
    movieId: number
    countryId: number
  }
}

export interface IGenre {
  id: number
  value: string
  movie_genre: {
    id: number
    movieId: number
    genreId: number
  }
}

export interface IComment {
  id: number
  value: string
  movieId: number
  userId: number
}

export interface IMovie {
  id: number
  name: string
  description: string
  image: string
  countries: Array<ICountry>
  genres: Array<IGenre>
  comments: Array<IComment>
}
