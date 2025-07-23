import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSlider.scss';

const ProductSlider = ({ products, onAddToCart  }) => {
  const settings = {
    dots: false, 
    infinite: false,      
    speed: 500,
    slidesToShow: 1.7, 
    slidesToScroll: 1,
    arrows: false        
  };

  return (
    <section className="product-slider-section">
      <h2 className="section-title">Lançamentos</h2>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;