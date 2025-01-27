import React from 'react'

import { links } from '../../data';
import { FaStream } from "react-icons/fa";
import { FaS } from 'react-icons/fa6';
import "./header.css";

const Header = () => {
  return (
   <header className='header'>
    <nav className='nav container'>
        <a href='/' className='nav__logo'>
        <p>Caffero</p>
        </a>

        <div className="nav__menu">
            <ul className="nav__list">
                {links.map(({name,path}, index)=>{
                    return(
                        <li className="nav__item" key={index}>
                            <a href={path} className="nav__link">{name}</a>
                        </li>

                    );
                })}
            </ul>
        </div>

        <div className="nav__toggle">
            <FaStream />
        </div>
    </nav>
   </header>
  )
}

export default Header
