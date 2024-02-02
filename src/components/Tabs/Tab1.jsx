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
        <p className="info">I would like to make a donation of</p>
        <div className="btn-row">
          <button className="btn btn-wd">£6</button>
          <button className="btn btn-good btn-wd">
            <span>£12 </span> <GrStatusGood className="icon-good" />
          </button>
          <button className="btn btn-wd">£18</button>
          <button className="btn btn-wd">£30</button>
          <button className="btn btn-other btn-fw">
            <span>£</span>
            <span>Other amount</span>
          </button>
          <button className="btn btn-pay btn-fw">
            <span>Donate £12 monthly</span>
            <FaLock className="icon-lock" />
          </button>
        </div>
      </div>

      <div className="card">
        <p className="card-text">
          £12 could help answer an emergency call to our animal Rescue line
        </p>
      </div>

      <footer>
        <p className="text-underline">
          I would like to make a one-off donation
        </p>

        <div>
          <p>All direct Debits are protected by the Direct Debit Guarantee.</p>

          <div className="images-flex">
            <img src={debit} alt="Image" />
            <img src={fundraising} alt="Image" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Tab2
