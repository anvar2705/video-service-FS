import React, { FC } from 'react'
import styled from 'styled-components'

interface IGenreProps {
  image: string
  title: string
  color?: number
}

const GenreRoot = styled.div<{ bgColor?: number }>`
  width: 280px;
  height: 208px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 20px;

  background: ${({ bgColor }) => {
    if (bgColor)
      switch (bgColor) {
        case 1:
          return 'linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)'
        case 2:
          return 'linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)'
        case 3:
          return 'linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)'
        default:
          return 'linear-gradient(127.83deg, #f2c94c 8.44%, #f29a4a 91.36%)'
      }
    return 'linear-gradient(127.83deg, #f2c94c 8.44%, #f29a4a 91.36%)'
  }};
  opacity: 0.8;
  box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15);
  transition-duration: 0.3s;

  &:hover {
    transition-duration: 0.3s;
    opacity: 1;
  }
`
const GenreImage = styled.div`
  font-size: 48px;
  margin-top: 68px;
  margin-bottom: 20px;
`
const GenreTitle = styled.div`
  color: white;
  font-size: 20px;
  line-height: 24px;
`

const GenreItem: FC<IGenreProps> = ({ image, title, color }) => {
  return (
    <GenreRoot bgColor={color}>
      <GenreImage>{image}</GenreImage>
      <GenreTitle>{title}</GenreTitle>
    </GenreRoot>
  )
}

export default GenreItem
