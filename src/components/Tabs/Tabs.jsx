import React, { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="container">
      <button
        className={`btn-tab1 ${activeTab === 'tab1' ? 'btn-tab-active' : ''}`}
        onClick={() => handleTabClick('tab1')}
      >
        Donate Montly
      </button>
      <button
        className={`btn-tab2 ${activeTab === 'tab2' ? 'btn-tab-active' : ''}`}
        onClick={() => handleTabClick('tab2')}
      >
        Donate Once
      </button>
      <div className="tabs">{activeTab === 'tab1' ? <Tab1 /> : <Tab2 />}</div>
    </div>
  )
}

export default Tabs
