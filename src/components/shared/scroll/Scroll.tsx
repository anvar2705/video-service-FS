import React, { FC, useEffect, useRef } from 'react'

interface IScrollProps {}

const Scroll: FC<IScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault()
        el.scrollTo({
          top: el.scrollTop + event.deltaY * 4,
          behavior: 'smooth',
        })
      }

      el.addEventListener('wheel', onWheel)

      return () => {
        el.removeEventListener('wheel', onWheel)
      }
    }
  })

  return (
    <div
      ref={scrollRef}
      style={{ maxHeight: '696px', overflow: 'hidden', marginBottom: '72px', display: 'flex' }}
    >
      <div>{children}</div>
      <div style={{ backgroundColor: '#333', width: '20px', height: '100%' }}>''</div>
    </div>
  )
}

export default Scroll
