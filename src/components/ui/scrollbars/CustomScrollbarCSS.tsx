import React, { FC } from 'react'
import styled from 'styled-components'

const ScrollbarRoot = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    border: 2px solid #f2f2f2;
    background-color: #bdbdbd;
    border-radius: 100vw;
  }
`

interface IScrollbarCustomProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number
}

const CustomScrollbarCSS: FC<IScrollbarCustomProps> = ({ height, children, ...divProps }) => {
  return (
    <ScrollbarRoot height={height} {...divProps}>
      {children}
    </ScrollbarRoot>
  )
}

export default CustomScrollbarCSS
