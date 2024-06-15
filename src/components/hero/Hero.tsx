import React from 'react'
import hero1 from "../../assets/hero1.png"
import hero2 from "../../assets/hero2.png"
import hero3 from "../../assets/hero3.png"
import "../../sass/__hero.scss"
const Hero:React.FC = () => {
  return (
    <div className='hero__wrapper'>
        <div className="container">
            <div className="hero__section">
                <span className='hero1'> 
                    <img src={hero1} alt="" />
                </span>
                <span className='hero2'>
                    <img src={hero2} alt="" />
                </span>
                <span className='hero3'>
                    <img src={hero3} alt="" />
                </span>
                <h1>Who we are and what we do</h1>
                <p>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
            </div>
        </div>
    </div>
  )
}

export default Hero