import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import './reservation.css';


const Reservation = () => {
  return (
    <section className='reservation container' id='reservation'>
        <h2 className="section__title" data-title="Reservation">
        Book A Table
      </h2>

      <form className='reservation__form grid'>
        <div className='form__input-div'>
            <input type='text' placeholder='Your Name' className='form__input'/>
        </div>

        <div className='form__input-div'>
            <input
            type='email'
            placeholder='Your Email Address'
            className='form__input'
            />
        </div>

        <div className='form__input-div'>
            <input type='text' placeholder='Your Phone' className='form__input'/>
        </div>

        <div className='form__input-div'>
            <input type='text' placeholder='Date Ex: DD/MM/YY' className='form__input'/>
        </div>

        <div className='form__input-div'>
            <input type='text' placeholder='Time Ex: 01:30PM' className='form__input'/>
        </div>

        <div className='form__input-div'>
            <input type='text' placeholder='Number Of People' className='form__input'/>
        </div>
        
        <div className='form__input-div form__input-textarea'>
            <textarea placeholder='Your Messge' className='form__input'></textarea>
        </div>

        <button className='btn btn--flex reservation__btn'>
            <FaRegBookmark/>Book A Table
        </button>
        </form>

        

          </section>
  )
}

export default Reservation
