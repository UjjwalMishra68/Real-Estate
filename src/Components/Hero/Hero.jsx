import React from 'react'
import "./Hero.css"
import HeroImage from "../../assets/hero-image.png"
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <div className="Hero Container">
        <div className="Hero-wrapper">
        <div className="Hero-left">
            <div className="Hero-tittle">
            <div className="circle"></div>
            <h1>Discover most suitable property</h1>
            </div>
            <p>Find a variety of properties that suit you very easily 
            forget all difficulties in finding a residence for you</p>
            <div className="map">
                <i class="ri-map-pin-2-fill"></i>
                <input type="text" />
                <button className='button'>Search</button>
            </div>
            <div className="counter">
                <ul>
                    <li>
                        <h3><CountUp start={8850} end={9000} duration={4}/> <span className='Plus'>+</span></h3>
                        <p>Premium Product</p>
                    </li>
                    <li>
                    <h3><CountUp start={1950} end={2000} duration={4}/> <span className='Plus'>+</span></h3>
                        <p>Happy Customer</p>
                    </li>
                    <li>
                    <h3><CountUp end={28} duration={4}/> <span className='Plus'>+</span></h3>
                        <p>Awards winning</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="Hero-right">
            <div className="mask">
            <img src={HeroImage} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero