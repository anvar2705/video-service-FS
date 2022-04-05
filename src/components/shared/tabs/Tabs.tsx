import React, { FC, SyntheticEvent } from 'react'
import { ITabData } from 'constants/constants'
import TabContent from './TabContent'
import s from './Tabs.module.scss'
import classNames from 'classnames'

interface ITabsProps {
  items: Array<ITabData>
}

const Tabs: FC<ITabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = React.useState(0)

  const openTab = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return
    }
    setActiveTab(Number(event.target.dataset.index))
  }

  return (
    <div>
      <div className={s.tab}>
        {items.map((tab, index) => (
          <button
            className={classNames(s.tab__link, { [s.active]: index === activeTab })}
            onClick={openTab}
            data-index={index}
            key={`${tab.title}${index}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {items[activeTab] && <TabContent {...items[activeTab]} />}
    </div>
  )
}

export default Tabs
