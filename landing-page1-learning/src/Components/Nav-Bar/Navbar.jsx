import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

function Navbar() {
    return <div>
        <section >
            <div className="sizer">
                <div className="header row">
            <div className="logo-container left-sect col row">
                <img src={logo}  alt= 'logo-img' className="logo-img" />
                <h2 className="logo-text">Sendpay</h2>
            </div>
            <div className="mid-sect col">
                <ul className="nav-list row">
                    <li className="nav-items"><a href="#">send Email</a></li>
                    <li className="nav-items"><a href="#">recieve money</a></li>
                    <li className="nav-items"><a href="#">language</a></li>
                </ul>
            </div>
            <div className="right-sec"><a href="#">How it works</a>
                <button type="submit " className='btn-outline'>sign in</button>
                    <button type="submit" className='btn-fill'>Register</button></div>
                </div>
                </div>
        </section>
  </div>;
}

export default Navbar;
