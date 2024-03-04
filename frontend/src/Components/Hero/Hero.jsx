import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div className='hero-left-casting'>
            <div className="hero-hand-icon">
               <p>new</p> 
               <img src={hand_icon} alt='' height={100} width={100}/>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
