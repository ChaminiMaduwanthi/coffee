import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import { FaStream } from 'react-icons/fa';  // Keep the icon for the menu toggle
import './header.css';

export const links = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Features', path: 'features' },
    { name: 'Menu', path: 'menu' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Chef', path: 'chef' },
];

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeHeader = () => {
        setScrollHeader(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
        return () => window.removeEventListener('scroll', changeHeader);
    }, []);

    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
            <nav className="nav container">
                <Link to="/" className="nav__logo" onClick={() => animateScroll.scrollToTop()}>
                    <p>Caffero</p>
                </Link>

                {/* Menu */}
                <div className={`nav__menu ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => (
                            <li key={index} className="nav__item">
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="nav__link"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Icon */}
                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaStream />
                </div>
            </nav>
        </header>
    );
};

export default Header;
