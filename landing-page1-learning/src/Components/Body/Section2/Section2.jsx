import React from 'react'
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import './Section2.css';

function Section2() {
    return (
        <div>
            <section className='sect-2'>
                <div className="sizer">
                <div className="row sect-2row">
                    <div className="top-part row">
                        <h4>How it Works</h4>
                        <div className="hr"></div>
                        <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa consectetur quod modi suscipit beatae?</p>
                    </div>
                    <div className="bottom-part row">
                        <div className="show row">
                            <div className="img">
                            <img src={img1} alt="gift card"  />
                            </div>
                            <h3 className="title">In-app transer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, delectus.</p>
                        </div>
                            <div className="show row">
                            <div className="img">
                            <img src={img2} alt="flower Box" />
                            </div>
                            <h3 className="title">In-app transer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, delectus.</p>
                        </div>
                        <div className="show row">
                            <div className="img">
                            <img src= {img3} alt="almblas" />
                            </div>
                            <h3 className="title">In-app transer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, delectus.</p>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Section2
