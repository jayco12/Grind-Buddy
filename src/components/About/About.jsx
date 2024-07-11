import React from 'react'
import './About.css'
import Image from 'next/image'
import arrow_forward from '../../../public/assets/arrow_forward.png'
import study from '../../../public/assets/study .png'
import bullet_icon from '../../../public/assets/bullet_icon.png'
import purple_hue from '../../../public/assets/purple_hue.png'
import blue_hue from '../../../public/assets/blue_hue.png'

const About = () => {
  return (
    <div className="about">
        <div className="design-element1">
            <Image src={purple_hue} alt="Design Element" layout="fill" objectFit="contain" />
        </div>
        <div className="design-element2">
            <Image src={blue_hue} alt="Design Element" layout="fill" objectFit="contain" />
        </div>
        <div className="about-intro">
            <h1>HEADING</h1>
            <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor <b>incididunt</b> ut labore et dolore magna aliqua.</p>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <div className="about-details">
                    <Image src={bullet_icon} alt="" width={20}/><p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                </div>
                <div className="about-details">
                    <Image src={bullet_icon} alt="" width={20}/><p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                </div>
                <div className="about-details">
                    <Image src={bullet_icon} alt="" width={20}/><p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.</p>
                </div>
            </div>
            <div className="about-right">
                <Image src={study} alt=""/> 
            </div>
        </div>
        <div className="about-action">
            <div className="about-form">TRY IT
                <Image src={arrow_forward} alt=""/> 
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