import React, { FC, useEffect, useRef, useState, MouseEvent, useCallback } from 'react'
import styled from 'styled-components'
import normalize from 'utils/normalize'

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  overflow-y: scroll;
  overflow-x: hidden;

  //::-webkit-scrollbar {
  //  display: none;
  //}
  //-ms-overflow-style: none; /* IE и Edge */
  //scrollbar-width: none; /* Firefox */
  margin-right: 30px;
`
const ScrollbarTrack = styled.div`
  width: 20px;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-top: 50px solid #aaaaaa;
  border-bottom: 50px solid #aaaaaa;
`
const ScrollbarThumb = styled.div`
  width: 16px;
  background-color: #999;
  border-radius: 100vw;
  position: absolute;
  //top: 0;
  //right: 0;

  :hover {
    background-color: #777;
  }
  :active {
    background-color: #555;
  }
`

interface ICustomScrollbarJSProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number
}

const CustomScrollbarJS: FC<ICustomScrollbarJSProps> = ({ height, children, ...divProps }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [thumbTop, setThumbTop] = useState(0)

  // set scroll thumb height
  useEffect(() => {
    const contentClientHeight = contentRef.current?.clientHeight
    const contentScrollHeight = contentRef.current?.scrollHeight
    const trackHeight = trackRef.current?.clientHeight
    if (contentClientHeight && contentScrollHeight && trackHeight) {
      const thumbHeight = (contentClientHeight / contentScrollHeight) * trackHeight
      if (thumbRef.current) thumbRef.current.style.height = `${thumbHeight}px`
    }
  }, [contentRef])

  // move scroll thumb by onScroll event
  const onScrollContent = () => {
    if (contentRef.current && trackRef.current) {
      const thumbTopOffset =
        (contentRef.current.scrollTop / contentRef.current.scrollHeight) *
        trackRef.current.clientHeight
      setThumbTop(thumbTopOffset)
    }
  }

  useEffect(() => {
    if (thumbRef.current) thumbRef.current.style.top = `${thumbTop}px`
  }, [thumbTop])

  // move function
  const moveAt = useCallback((posY: number, currentTarget: HTMLElement) => {
    currentTarget.style.top = `${posY}px`
  }, [])

  const onMousedownThumb = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    const thumbHeight = event.currentTarget.offsetHeight
    // get y coordinate relative to thumb
    const clientY = event.clientY - event.currentTarget.getBoundingClientRect().top

    // move center of scroll thumb to mouse
    if (trackRef.current && contentRef.current) {
      // get border width for scroll track
      const trackBorderTopWidth = getComputedStyle(trackRef.current).borderTopWidth
      const trackBorderBottomWidth = getComputedStyle(trackRef.current).borderBottomWidth

      console.log(
        trackBorderTopWidth.slice(trackBorderTopWidth.length - 2, trackBorderTopWidth.length)
      )

      const currentPosY =
        event.currentTarget.getBoundingClientRect().top -
        trackRef.current.getBoundingClientRect().top

      console.log(currentPosY)

      const posY = normalize(
        currentPosY + clientY - thumbHeight / 2,
        0,
        contentRef.current.offsetHeight - thumbHeight
      )
      moveAt(posY, event.currentTarget)

      // scroll to new thumb position
      const scrollToPosY =
        ((posY + thumbHeight / 2) / trackRef.current.offsetHeight) *
          contentRef.current.scrollHeight -
        contentRef.current.clientHeight / 2
      contentRef.current.scrollTo(0, scrollToPosY)
    }
  }

  const onMouseDownTrack = (event: MouseEvent<HTMLDivElement>) => {
    const clickY = event.clientY - event.currentTarget.getBoundingClientRect().top
    if (contentRef.current) {
      const scrollToY =
        (clickY / event.currentTarget.offsetHeight) * contentRef.current.scrollHeight -
        contentRef.current.clientHeight / 2
      contentRef.current.scrollTo(0, scrollToY)
    }
  }

  return (
    <Wrapper {...divProps}>
      <Content ref={contentRef} onScroll={onScrollContent} height={height}>
        {children}
      </Content>
      <ScrollbarTrack ref={trackRef} onMouseDown={onMouseDownTrack}>
        <ScrollbarThumb ref={thumbRef} onMouseDown={onMousedownThumb} />
      </ScrollbarTrack>
    </Wrapper>
  )
}

export default CustomScrollbarJS
