import styles from './Hero.css'
import Image from 'next/image'
import logo_gb from '../../../public/assets/logo_gb.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-sections">
        <div className="hero-left">
        <Image src={logo_gb} width={600} alt=""/>
        </div>
        <div className="hero-right">
          <h1>HEADING</h1>
          <p>Add small/powerful blurb about the app.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero