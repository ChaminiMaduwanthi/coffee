import React from 'react';
import chooseImg1 from "../../assets/images/choose1.png";
import chooseImg2 from "../../assets/images/choose2.png";
import chooseImg3 from "../../assets/images/choose3.png";
import chooseImg4 from "../../assets/images/choose4.png";
import "./choose.css";

const Choose = () => {
  return (
    <section className='choose section'>
        <div className='choose__grid container grid'>
            <div className='choose_content'>
                <h2 className='section__title title-left'
                    data-title="Why Choose Us">
                        Caffero Most Out Of Your Favorite & Tasty Coffee House
                </h2>

                <p className='choose__description'>
                At caffero, we’re passionate about delivering the perfect cup every time.
                We use only premium beans, fresh ingredients, and expert techniques to craft exceptional beverages. 
                Our cozy ambiance, friendly staff, 
                and commitment to quality make us the ideal spot to relax, connect, and enjoy great coffee.
                </p>

                <div className='choose__details grid'>
                    <div className='choose__details-item'>
                        <div className='choose__details-img-wrapper'>
                            <img src={chooseImg1} alt='' className='choose__details-img'/>
                        </div>

                        <div>
                            <h3 className='choose__details-title'>Pure And Grades</h3>
                            <p className='choose__details-description'>
                            At caffero, we’re passionate about delivering the perfect cup every time.
                            We use only premium beans, fresh ingredients, and expert techniques to craft exceptional beverages. 
                            </p>
                        </div>
                    </div>

                    <div className='choose__details-item'>
                        <div className='choose__details-img-wrapper'>
                            <img src={chooseImg2} alt='' className='choose__details-img'/>
                        </div>

                        <div>
                            <h3 className='choose__details-title'>Awwsome Arome</h3>
                            <p className='choose__details-description'>
                            At caffero, we’re passionate about delivering the perfect cup every time.
                            We use only premium beans, fresh ingredients, and expert techniques to craft exceptional beverages. 
                            </p>
                        </div>
                    </div>

                    <div className='choose__details-item'>
                        <div className='choose__details-img-wrapper'>
                            <img src={chooseImg3} alt='' className='choose__details-img'/>
                        </div>

                        <div>
                            <h3 className='choose__details-title'>Healthy Coffee</h3>
                            <p className='choose__details-description'>
                            At caffero, we’re passionate about delivering the perfect cup every time.
                            We use only premium beans, fresh ingredients, and expert techniques to craft exceptional beverages. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={chooseImg4} alt='' className='choose__img'/>
        </div>
    </section>
  )
}

export default Choose
