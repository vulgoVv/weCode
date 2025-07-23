import React from 'react';
import promoBanner1 from '../../assets/images/banners/promo1.png';
import promoBanner2 from '../../assets/images/banners/promo2.png';
import './PromoBanners.scss';

const PromoBanners = () => {
  return (
    <section className="promo-banners-container">
      <a href="#">
        <img src={promoBanner1} alt="Banner promocional: Be simple, be true." />
      </a>
      <a href="#">
        <img src={promoBanner2} alt="Banner promocional: Surpreendente a cada passo." />
      </a>
    </section>
  );
};

export default PromoBanners;