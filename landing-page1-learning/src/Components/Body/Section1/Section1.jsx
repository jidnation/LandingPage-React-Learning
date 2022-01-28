import React from 'react';
import img from "../../../images/m-right.png";
import './Section1.css';

function Section1() {
    return (
        <div>
            <section>
                <div className="top-section sizer">
                    <div className="left-side hs">
                        <div className="reducer">
                        <h2 className="heading">Sending Money is Easier than before</h2>
                        <div className="hr"></div>
                        <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque necessitatibus assumenda odit reprehenderit accusantium corrupti magnam tempora quo optio.</p>
                        <div className="btn-sec">
                        <button type="submit" className='btn-fill mr'>Register</button>
                        <button type="submit" className='btn-outline'>learn more</button>
                        </div>
                        </div>
                        </div>
                    <div className="right-side hs">
                        <div className="reducer">
                            <img src={img} alt="Easy Transactions" />
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1
