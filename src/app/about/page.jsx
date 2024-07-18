import './page.css'
import arrow_forward from '../../../public/assets/arrow_forward.png'
import Team_Data from '../../../public/assets/team_data.jsx'
import Image from 'next/image'
import purple_hue from '../../../public/assets/purple_hue.png'
import blue_hue from '../../../public/assets/blue_hue.png'

const AboutPage = () => {

  return (
    <div className="about-us">
      <div className="design-element1">
            <Image src={purple_hue} alt="Design Element" layout="fill" objectFit="contain" />
        </div>
        <div className="design-element2">
            <Image src={blue_hue} alt="Design Element" layout="fill" objectFit="contain" />
        </div>
        <div className="about-us-intro">
          <h1>Blurb about teams goal/interest in making this.</h1>
          <p>(Add about our team) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="about-us-team">
          <h2>Meet the Team</h2>
        </div>
        <div className="about-us-container">
        {Team_Data.map((team,index)=>{
          return <div key={index} className='about-us-format'>
             <h3>{team.t_no}</h3>
             <h2>{team.t_name}</h2>
             <div className='team-pic'>
                <Image src={team.t_pic} alt={team.t_name} width={200} height={200} />
              </div>
             <div className='about-us-readmore'>
              <p>{team.t_desc}</p>
              <img src={arrow_forward} alt="" />
             </div>
          </div>
        })}
        </div>
    </div>
  );
};

export default AboutPage;