import React, { FC, useEffect, useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import normalize from 'utils/normalize'
import CSS from 'csstype'

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
  margin-right: 8px;
`
const ScrollbarTrack = styled.div<{
  width?: number
  backgroundColor?: string
  borderRadius?: number
}>`
  width: ${({ width }) => (width ? `${width}px` : '20px')};
  height: 100%;
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : '#ccc')};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '100vw')};
`
const ScrollbarThumb = styled.div<{
  width?: number
  backgroundColor?: string
  backgroundColorHover?: string
  backgroundColorActive?: string
  borderRadius?: number
}>`
  width: ${({ width }) => (width ? `${width}px` : '16px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : '#999')};
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '100vw')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  :hover {
    background-color: ${({ backgroundColorHover }) =>
      backgroundColorHover ? `${backgroundColorHover}` : '#777'};
    width: ${({ width }) => (width ? `${width * 1.5}px` : '16px')};
  }
  :active {
    background-color: ${({ backgroundColorActive }) =>
      backgroundColorActive ? `${backgroundColorActive}` : '#555'};
    width: ${({ width }) => (width ? `${width * 1.5}px` : '16px')};
  }
`

interface ICustomScrollbarJSProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: Omit<CSS.Properties, 'position'>
  height?: number
  trackWidth?: number
  trackColor?: string
  trackBorderRadius?: number
  thumbWidth?: number
  thumbColor?: string
  thumbColorHover?: string
  thumbColorActive?: string
  thumbBorderRadius?: number
}

const CustomScrollbarJS: FC<ICustomScrollbarJSProps> = ({
  height,
  trackWidth,
  trackColor,
  trackBorderRadius,
  thumbWidth,
  thumbColor,
  thumbColorHover,
  thumbColorActive,
  thumbBorderRadius,
  children,
  ...divProps
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(0)

  // set thumb height
  useEffect(() => {
    const contentClientHeight = contentRef.current?.clientHeight
    const contentScrollHeight = contentRef.current?.scrollHeight
    const trackHeight = trackRef.current?.clientHeight
    if (contentClientHeight && contentScrollHeight && trackHeight) {
      const thumbHeightCalculated = (contentClientHeight / contentScrollHeight) * trackHeight
      if (thumbRef.current) {
        thumbRef.current.style.height = `${thumbHeightCalculated}px`
        setThumbHeight(thumbHeightCalculated)
      }
    }
  }, [contentRef])

  // move function
  const moveThumbAt = useCallback((posY: number) => {
    if (thumbRef.current) thumbRef.current.style.top = `${posY}px`
  }, [])

  // mouseMove event listener
  const mouseMoveEventListener = useCallback(
    (event: MouseEvent) => {
      if (trackRef.current && contentRef.current) {
        // move thumb
        const posY =
          event.clientY - (trackRef.current.getBoundingClientRect().top + thumbHeight / 2)
        const normalizedPosY = normalize(posY, 0, trackRef.current.clientHeight - thumbHeight)
        moveThumbAt(normalizedPosY)

        //scroll content
        const scrollToPosY =
          ((normalizedPosY + thumbHeight / 2) / trackRef.current.clientHeight) *
            contentRef.current.scrollHeight -
          contentRef.current.clientHeight / 2
        contentRef.current.scrollTo(0, scrollToPosY)
      }
    },
    [moveThumbAt, trackRef, thumbHeight]
  )

  // mouseUp event listener
  const mouseUpEventListener = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveEventListener)
    document.body.style.userSelect = 'auto'
  }, [mouseMoveEventListener])

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

  // mouseDown track event - scroll content if click to track
  const onMouseDownTrack = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickY = event.clientY - event.currentTarget.getBoundingClientRect().top
    if (contentRef.current) {
      const scrollToY =
        (clickY / event.currentTarget.offsetHeight) * contentRef.current.scrollHeight -
        contentRef.current.clientHeight / 2
      contentRef.current.scrollTo(0, scrollToY)
    }
  }

  // mouseDown thumb event
  const onMouseDownThumb = (event: React.MouseEvent<HTMLDivElement>) => {
    // stop propagation to track & disable selection for body
    event.stopPropagation()
    document.body.style.userSelect = 'none'

    // get y coordinate relative to thumb
    const clientY = event.clientY - event.currentTarget.getBoundingClientRect().top

    // move center of scroll thumb to mouse
    if (trackRef.current && contentRef.current) {
      // get top border width for scroll track
      const trackBorderTopWidth = getComputedStyle(trackRef.current).borderTopWidth
      const trackBorderTopWidthValue = Number(
        trackBorderTopWidth.slice(0, trackBorderTopWidth.indexOf('px'))
      )

      // current position of thumb relative to top of track without border
      const currentPosY =
        event.currentTarget.getBoundingClientRect().top -
        (trackRef.current.getBoundingClientRect().top + trackBorderTopWidthValue)

      // calculate new position of thumb, and move thumb to it
      const posY = normalize(
        currentPosY + clientY - thumbHeight / 2,
        0,
        contentRef.current.clientHeight - thumbHeight
      )
      moveThumbAt(posY)

      // scroll to new thumb position
      const scrollToPosY =
        ((posY + thumbHeight / 2) / trackRef.current.clientHeight) *
          contentRef.current.scrollHeight -
        contentRef.current.clientHeight / 2
      contentRef.current.scrollTo(0, scrollToPosY)
    }

    document.addEventListener('mousemove', mouseMoveEventListener)
  }

  // add mouseUp event listener to remove mouseMove event listener for thumb
  useEffect(() => {
    document.addEventListener('mouseup', mouseUpEventListener)

    return () => {
      document.removeEventListener('mouseup', mouseUpEventListener)
    }
  }, [mouseUpEventListener])

  return (
    <Wrapper {...divProps}>
      <Content ref={contentRef} onScroll={onScrollContent} height={height}>
        {children}
      </Content>
      <ScrollbarTrack
        ref={trackRef}
        onMouseDown={onMouseDownTrack}
        width={trackWidth}
        backgroundColor={trackColor}
        borderRadius={trackBorderRadius}
      >
        <ScrollbarThumb
          ref={thumbRef}
          onMouseDown={onMouseDownThumb}
          onDragStart={() => false}
          width={thumbWidth}
          backgroundColor={thumbColor}
          backgroundColorHover={thumbColorHover}
          backgroundColorActive={thumbColorActive}
          borderRadius={thumbBorderRadius}
        />
      </ScrollbarTrack>
    </Wrapper>
  )
}

export default CustomScrollbarJS
