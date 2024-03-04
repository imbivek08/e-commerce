import React from 'react'
import './Offers.css'
import exlclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only for best sellers products</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exlclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
