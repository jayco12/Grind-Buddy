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
          <h1>About Us </h1>
          <p>At Grind Buddy, our mission is to enhance the academic experience by fostering connections between students. We believe that studying with the right partner can significantly improve productivity and learning outcomes. Our team is passionate about education and technology, and we have combined these passions to create an app that makes finding a study partner easy and effective.</p>
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