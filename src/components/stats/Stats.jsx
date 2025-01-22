import React from 'react'
import b1 from '../../assets/images/branches.png';
import b2 from '../../assets/images/cus.png';
import b3 from '../../assets/images/chef.png';
import b4 from '../../assets/images/experience.png';
import './stats.css';


const Stats = () => {
  return (
    <section className='stats section'>
        <div className='stats__grid container grid'>
            <div className='stats__item'>
                <div className='stats__img-wrapper'>
                    <img src={b1} alt='' className='stats__img'/>
                </div>

                <div>
                    <p className='stats__no'>1500</p>
                    <h3 className='stats__title'>Total Branches</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className='stats__img-wrapper'>
                    <img src={b2} alt='' className='stats__img'/>
                </div>

                <div>
                    <p className='stats__no'>250</p>
                    <h3 className='stats__title'>Happy Customer</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className='stats__img-wrapper'>
                    <img src={b3} alt='' className='stats__img'/>
                </div>

                <div>
                    <p className='stats__no'>15</p>
                    <h3 className='stats__title'>Proffessional Chefs</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className='stats__img-wrapper'>
                    <img src={b4} alt='' className='stats__img'/>
                </div>

                <div>
                    <p className='stats__no'>10</p>
                    <h3 className='stats__title'>Years Of Experience</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats
