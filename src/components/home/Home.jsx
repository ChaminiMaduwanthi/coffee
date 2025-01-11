import React from 'react'
import "./home.css";

const Home = () => {
  return (
   <section className='home' id="home">
    <div className="home__container container">
        <div className="home__content">
            <span className='home__subtitle'>
                Welcome to coffero!
            </span>
            <h1 className="home__title">Discover Amaizing Coffee House & Get Energy</h1>
            <p className="home__description">this is coffee shop, 
                you can come and enjoy. </p>

            <div className="home__btns">
                <a href="#menu" className='btn'>Check Menu</a>
                <a href="#reservation" className='btn home__btn'>Book Table</a>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Home
