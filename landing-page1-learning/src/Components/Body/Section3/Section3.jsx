import React from 'react';
import card from '../../../images/m-left.png';
import './Section3.css';

function Section3() {
    return (
        <div>
            <section className="sect-3">
                <div className="sizer ">
                    <div className="sect-3row">
                        <div className="card  row">
                            <div className="left-sid hs">
                                <img src={card} alt="Real-Time Card" />
                            </div>
                            <div className="hs row right-sid">
                                <div className="sized-box">
                                    <h3>Real-time Currency balance check</h3>
                                    <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo ipsam impedit.</p>
                                    <a href="">Ream More<i></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section3;
