import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
// import { IoLogoTiktok } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <Link className="navbar-brand custom-navbar-brand" to="/">Henna by Tayyaba</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="d-flex justify-content-between w-100">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link"><Link to="/">Home</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><Link to="/booking">Booking</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><Link to="/about">About Us</Link></div>
                        </li>
                    </ul>
                    <div className="nav-icons">
                        <Link to="/"><FaInstagram size={20} /></Link>
                        <Link to="/"><FaFacebookF size={20} /></Link>
                        <Link to="/"><FaTwitter size={20} /></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
