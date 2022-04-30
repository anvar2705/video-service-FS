import React, { FC, ReactNode } from 'react'

interface ITabContentProps {
  content: ReactNode
}

const TabContent: FC<ITabContentProps> = ({ content }) => {
  return <>{content}</>
}

export default TabContent
