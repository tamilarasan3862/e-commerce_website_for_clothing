import React from "react";
import hand_icon from "../component/asset/hand_icon.png";
import hero_icon from "../component/asset/hero_image.png";
import arrow_icon from "../component/asset/arrow.png";
import "./Hero.css";
function Hero() {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hand-icons'>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>latest collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_icon} alt="" />
            </div>
        </div>
    )
}
export default Hero;