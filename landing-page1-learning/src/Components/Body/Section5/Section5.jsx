import React, { Component } from 'react'
import './Section5.css'
import { FaChevronCircleRight } from 'react-icons/fa';
import imgd1 from '../../../images/imgd1.jpeg';
import imgd2 from '../../../images/imgd2.jpeg';
import imgd3 from '../../../images/imgd3.jpg';



class Section5 extends Component {
  render() {
    return (
        <>
            <section className="sect-5">
                <div className="sizer row">
                    <div className="hs">
                    <div className="naked-box ">
                        <h4 className="heading row">People Are Saying About Us</h4>
                        <div className="hr"></div>
                        <div className="direction row">
                            <h5>See all</h5>
                                <div className="chevor-icon">
                                < FaChevronCircleRight />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="box-container">
                            <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nam ex reiciendis.</p>
                                <div className="lower-part row">
                                    <div className="avatar">
                                        <img src={imgd1} alt="img-avatar" />
                                    </div>
                                    <div className="text-sect row ">
                                        <h4 className="title">Dev opter</h4>
                                        <h5 className="role">Designer</h5>
                                    </div>
                                </div>
                    </div>
                    <div className="box-container">
                            <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nam ex reiciendis.</p>
                                <div className="lower-part row">
                                    <div className="avatar">
                                        <img src={imgd2} alt="img-avatar" />
                                    </div>
                                    <div className="text-sect row ">
                                        <h4 className="title">Dev opter</h4>
                                        <h5 className="role">Designer</h5>
                                    </div>
                                </div>
                    </div>
                    <div className="box-container">
                            <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nam ex reiciendis.</p>
                                <div className="lower-part row">
                                    <div className="avatar">
                                        <img src={imgd3} alt="img-avatar" />
                                    </div>
                                    <div className="text-sect row ">
                                        <h4 className="title">Dev opter</h4>
                                        <h5 className="role">Designer</h5>
                                    </div>
                                </div>
                        </div>
                    
                </div>
            </section>
      </>
    )
  }
}

export default Section5
