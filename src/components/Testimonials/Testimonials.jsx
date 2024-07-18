import React, { useState } from 'react';
import './Testimonials.css';

// Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "/assets/profile-image-1.png",
      testimonial: "Grind Buddy has revolutionized the way I study. Finding a compatible study partner nearby or virtually has never been easier. The app's seamless matching system ensures I always have the right study buddy to keep me motivated and productive.",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "/assets/profile-image-2.png",
      testimonial: "Grind Buddy has revolutionized the way I study. Finding a compatible study partner nearby or virtually has never been easier. The app's seamless matching system ensures I always have the right study buddy to keep me motivated and productive.",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "/assets/profile-image-3.png",
      testimonial: "Grind Buddy has revolutionized the way I study. Finding a compatible study partner nearby or virtually has never been easier. The app's seamless matching system ensures I always have the right study buddy to keep me motivated and productive.",
    },
   
  ];

  const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };
  
    const { name, job, image, testimonial } = testimonials[currentIndex];
  
    return (
    <div className="testimonials">
        <h1>TESTIMONIALS</h1>
        <div className="testimonials-sections">
            <div className="wrapper">
                <div className="testimonial-container" id="testimonial-container">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{testimonial}</p>
                    <h6>{job}</h6>
                </div>
                <button id="prev" onClick={handlePrev}>&lt;</button>
                <button id="next" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    </div>
    );
  };
  
  export default Testimonial;