import React, { useState } from 'react';
import './Testimonials.css';

// Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "/assets/profile-image-1.png",
      testimonial: "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "/assets/profile-image-2.png",
      testimonial: "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "/assets/profile-image-3.png",
      testimonial: "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO, Zeal Wheels",
      image: "/assets/profile-image-4.png",
      testimonial: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
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