import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import pic1 from "../../assets/harvest.jpeg";
import pic2 from "../../assets/import.jpeg";
import pic3 from "../../assets/bank.jpeg";
import pic4 from "../../assets/logistic.jpeg";
import pic5 from "../../assets/business.jpeg";
import pic6 from "../../assets/development.jpeg";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    { image: pic1, text: "Agricultural Products Sourcing" },
    { image: pic2, text: "Import/Export"},
    { image: pic3, text:  "Trade Finance/Bank Instruments"},
    { image: pic4, text: "Logistics" },
    { image: pic5, text: "Marketing and Research"},
    { image: pic6, text: "Business Development" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div className="slider-item" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="text-overlay">
        <h1>FML <span>TRADING</span></h1>
        <h3>WE PROVIDE OUR CLIENTS WITH</h3>
        <h4>{slidesData[currentSlide]?.text}</h4>
      </div>
    </div>
  );
};

export default Slide;
