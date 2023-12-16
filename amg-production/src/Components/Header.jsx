import React, { useState, useEffect } from 'react';
import '../../src/index.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for menu toggle
    const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false); // State for account popup

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleAccountPopup = () => {
        setIsAccountPopupOpen(!isAccountPopupOpen);
    };

    return (
        <>
            <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
                <div className="navbar-container">

                    <div className="navbar-logo">
                        <NavLink exact to='/'>
                            <img id='logo' src="images/logo.webp" alt="" />
                        </NavLink>
                    </div>

                    <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>

                        <ul className="nav-links">
                            <li><a href="/#home">Home</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#portfolio">Portfolio</a></li>
                            <li><a href="/#reviews">Reviews</a></li>
                            <li><a href="/#team">Team</a></li>
                            <li><a href="/#results">Results</a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>

                        <div id='navbar-icons'>
                            <i className="ri-shopping-cart-2-line"></i>
                            <i className="ri-account-circle-line" onClick={toggleAccountPopup}></i>
                        </div>

                        <div className="menu-toggle" onClick={toggleMenu}>
                            <i className={isOpen ? 'ri-close-fill' : 'ri-menu-fill'}></i>
                        </div>

                    </div>
                </div>
            </nav>

            {isAccountPopupOpen && (
                <div className="account-popup">
                    {/* Content of your account popup goes here */}
                    <div className="popup-content">
                        <p>This is your account popup content.</p>
                        {/* Add your account-related content here */}
                    </div>
                    <span className="close" onClick={toggleAccountPopup}>&times;</span>
                </div>
            )}
        </>
    );
};

export default Header;
