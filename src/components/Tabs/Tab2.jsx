// Tabs.js
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { GrStatusGood } from 'react-icons/gr'
import './tab.css'
import visa from './../../assets/visa.png'
import paypal from './../../assets/paypal.png'
import mastercard from './../../assets/mastercard.png'
import fundraising from './../../assets/fundraising.png'
import debit from './../../assets/direct.png'

const Tab2 = () => {
  return (
    <div className="row">
      <div className="card">
        <p>I would like to make a one-off donation</p>
        <div className="btn-row">
          <button className="btn">£10</button>
          <button className="btn btn-good">
            <span>£40 </span> <GrStatusGood className="icon-good" />
          </button>
          <button className="btn">£75</button>
          <button className="btn">£100</button>
          <button className="btn btn-other">
            <span>£</span>
            <span>Other amount</span>
          </button>
          <button className="btn btn-pay">
            <span>Donate £40 monthly</span>
            <FaLock className="icon-lock" />
          </button>
        </div>
      </div>

      <div className="card">
        <p className="card-text">
          £40 could help answer an animal Rescue Team take on an urgent animal
          rescue
        </p>
      </div>

      <footer>
        <p className="text-underline">I would like to give monthly</p>

        <div>
          <div className="images-flex">
            <img src={visa} alt="Image" />
            <img src={mastercard} alt="Image" />
            <img src={paypal} alt="Image" />
            <img src={fundraising} alt="Image" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Tab2
