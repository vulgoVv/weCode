import React from 'react';
import Slider from 'react-slick';
import './InfoSlider.scss';

const InfoSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="info-slider-section">
      <h2 className="section-title">Conheça mais</h2>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <a href="">
              <img src={slide.image} alt={`Banner informativo ${slide.id}`} style={{ width: '100%', display: 'block' }} />
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InfoSlider;