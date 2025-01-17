import React from 'react'
import aboutImg from "../../assets/images/img-1.png"
import { FiCheck } from 'react-icons/fi'

const About = () => {
  return (
   <select className="about section" id="about">
    <div className=".about__grid container grid">
    <div className=".about__img-wrapper">
      <img src={aboutImg} alt="" className='about__img'/>
    </div>

    <div className='about__content'>
      <h2 className='section__title' data-title="About Us">Nestled in the heart of Maharagama, 
        our coffee shop is more than just a place to grab a quick coffee—
        it’s a cozy haven where great conversations brew, friendships blossom, and
         moments turn into cherished memories.</h2>

          <p className='about__description'>
          At our coffee shop , we serve premium coffee, delicious treats, and
         a welcoming vibe. Whether you're starting your day or taking a break,
          every cup is crafted to make your moment special. ☕
          </p>

          <div className='about__details grid'>
            
          <p className='about__details-description'>
              <FiCheck className='about__details-icons'/>
              Pair your coffee with our freshly baked pastries, sandwiches, and desserts.
            </p>


            <p className='about__details-description'>
              <FiCheck className='about__details-icons'/>
              Our cozy, welcoming vibe is perfect for unwinding, working, or catching up with friends. 
            </p>

            <p className='about__details-description'>
              <FiCheck className='about__details-icons'/>
              We support local farmers and artisans to bring you the best our community has to offer. 
            </p>
          </div>

          <a href='#team' className='btn'>
            Our Experts
          </a>
    </div>
    </div>
   </select>
  )
}

export default About
