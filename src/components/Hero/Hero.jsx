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
          <h1>Find Your Perfect Study Partner, Anytime, Anywhere</h1>
          <p>Grind Buddy makes it easy to connect with the ideal study partner, whether you are at home or on the go. With our advanced matching system, you will always find the perfect companion to boost your productivity and keep you motivated.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero