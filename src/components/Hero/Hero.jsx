import './Hero.css'
import logo_gb from '../../assets/logo_gb.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-sections">
        <div className="hero-left">
          <img src={logo_gb} alt="Logo" />
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