import React from 'react'
import './About.css'
import Image from 'next/image'
import arrow_forward from '../../../public/assets/arrow_forward.png'
import study from '../../../public/assets/study .png'
import Col from 'react-bootstrap'

const About = () => {
  return (
    <div className="about">
        <div className="about-sections">
            <div className="about-intro">
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor <b>incididunt</b> ut labore et dolore magna aliqua.</p>
            </div>
            <Col xs={12} md={6} xl={6}>
                <div className="about-details">
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                </div>
            </Col >
            <Col xs={12} md={6} xl={6} className="about-right">
            <Image src={study} alt="" height={200} width={200}/> 
            </Col>
        </div>
        <div className="about-action">
            <div className="about-form">TRY IT
                <Image src={arrow_forward} alt="" height={30} width={30}/> 
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