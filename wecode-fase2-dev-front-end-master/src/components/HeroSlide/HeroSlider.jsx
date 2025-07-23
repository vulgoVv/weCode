import React from 'react';
import Slider from 'react-slick';
import HeroSlide from '../HeroSlide/HeroSlide';
import './HeroSlider.scss';

const HeroSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false 
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}> 
        {slides.map(slide => (
          <HeroSlide key={slide.id} image={slide.image} caption={slide.caption} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;