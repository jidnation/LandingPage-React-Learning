import React, { Component } from 'react'
import logo from '../../images/logo.svg';
import fb from '../../images/facebook.png'
import tw from '../../images/twitter.png'
import git from '../../images/git.svg'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="foot-sec">
                    <div className="sizer row foot-container">
                        <div className="footer-left-sect row">
                        <div className="logo-container row">
                            <logo-img><img src={logo} alt="" /></logo-img>
                            <h4 className="logo-text">Sendpay</h4>
                        </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quibusdam eum a quia deleniti expedita quisquam eveniet atque quasi aspernatur.</p>
                        </div>
                        
<div className="product-list footer-list">
    <ul className="listing">
        <li className="product-item items heading">Products</li>
        <li className="product-item items">Products</li>
        <li className="product-item items">Products</li>
        <li className="product-item items">Products</li>
    </ul>
    </div>              
                    <div className="About-list footer-list">
                        <ul className="listing">
                            <li className="about-item items heading">About</li>
                            <li className="about-item items">About</li>
                            <li className="about-item items">About</li>
                            <li className="about-item items">About</li>
                            <li className="about-item items">About</li>
                        </ul>
                    </div>
                    <div className="cata-list footer-list">
                        <ul className="listing">
                            <li className="cata-item items heading">Catalog</li>
                            <li className="cata-item items">Catalog</li>
                            <li className="cata-item items">Catalog</li>
                            <li className="cata-item items">Catalog</li>
                        </ul>
                        </div>

                        <div className="social-connect footer-list">
                            <h3 className="heading">Social Contracts</h3>
                            <div className="social-link row">
                                <div className="link-text">Facebook</div>
                                <img src={fb} alt="" className="link-icon" />
                            </div>
                            <div className="social-link row">
                                <div className="link-text">Git-hub</div>
                                <img src={git} alt="" className="link-icon" />
                            </div>
                            <div className="social-link row">
                                <div className="link-text">Twitter</div>
                                <img src={tw} alt="" className="link-icon" />
                            </div>
                        </div>

                        </div>


                </footer>
            </div>
        )
    }
}

export default Footer
