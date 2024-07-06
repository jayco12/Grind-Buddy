import React from 'react'
import './About.css'
import arrow_forward from '../../assets/arrow_forward.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-sections">
            <div className="about-intro">
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor <b>incididunt</b> ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about-left">
                <div className="about-details">
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                </div>
            </div>
            <div className="about-right">
                <img src="" alt="" />
            </div>
        </div>
        <div className="about-action">
{/* Arrow isn't working */}
            <div className="about-form">TRY IT
                <img src="arrow_forward" alt="" /> 
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>100+</h1>
                <p>USERS CONNECTED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>50+</h1>
                <p>SCHOOLS PARTICIPATED</p>
            </div>
            <hr /><div className="about-achievement">
                <h1>100+</h1>
                <p>USERS CONNECTED</p>
            </div>
        </div>
    </div>
  )
}

export default About