// Tabs.js
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { GrStatusGood } from 'react-icons/gr'
import './tab.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="container">
      <button onClick={() => handleTabClick('tab1')}>Tab 1</button>
      <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
      <div className="tabs">
        {activeTab === 'tab1' ? (
          <div className="row">
            <p>I would like to make a donation of</p>
            <div className="btn-row">
              <button className="btn">£6</button>
              <button className="btn">
                <span>£12 </span> <GrStatusGood className="icon-good" />
              </button>
              <button className="btn">£18</button>
              <button className="btn">£30</button>
              <button className="btn">
                <span>£</span>
                <span>Other amount</span>
              </button>
              <button className="btn">
                <span>Donate £12 monthly</span>
                <FaLock className="icon-lock" />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              aliquam!
            </p>

            <div></div>
          </div>
        ) : (
          <div>Tab 2 details here... this is the second o</div>
        )}
      </div>
    </div>
  )
}

export default Tabs
