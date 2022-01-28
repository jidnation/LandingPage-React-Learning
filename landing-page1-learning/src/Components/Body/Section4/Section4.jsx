import React, { Component } from 'react'
import logo from '../../../images/logo.svg'
import mobile from '../../../images/mobile.png'
import bank from '../../../images/bank.png'
import truck from '../../../images/truck.png'
import clock from '../../../images/clock.png'
import './Section4.css'

export class Section4 extends Component {
    render() {
        return (
            <div>
                <section className="sect-4">
                    <div className="sizer sect-4-container row">
                        <div className="sect-4-heading row">
                            <h2>We are given Services</h2>
                            <div className="logo-container row">
                                <img src={logo} alt="site-icon" className="logo-img" />
                                <h4 className="logo-text">Sendpay</h4>
                            </div>
                            </div>
                            <div className="hr"></div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nam!</p>
                            <div className="services-list row">
                                <div className="services row hf">
                                    <div className="service-icon ">
                                        <img src={bank} alt="bank-icon" /></div>
                                    <div className="service-details">
                                        <h4 className="heading">Bank Transfer</h4>
                                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="services row hf">
                                    <div className="service-icon ">
                                        <img src={clock} alt="Time-icon" /></div>
                                    <div className="service-details">
                                        <h4 className="heading">Fast Transfer</h4>
                                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="services row hf">
                                    <div className="service-icon "><img src={mobile} alt="phone-icon" /></div>
                                    <div className="service-details">
                                        <h4 className="heading">Mobile Recharge</h4>
                                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="services row hf">
                                    <div className="service-icon "><img src={truck}alt="truck-icon" /></div>
                                    <div className="service-details">
                                        <h4 className="heading">Easy and Fast</h4>
                                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default Section4
