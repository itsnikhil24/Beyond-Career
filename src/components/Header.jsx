import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            {/* <div className="logo"><h1>BeyondCareer</h1></div> */}
            <nav className="nav-links">
                <Link to="#">About Us</Link>
                <Link to="#">Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
