import React from 'react';
import Slider from 'react-slick';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategorySlider.scss';

const CategorySlider = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="category-slider-container">
      <h2>Categorias</h2>
      <Slider {...settings}>
        {categories.map(category => (
          <CategoryCard key={category.id} image={category.image} name={category.name} />
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;