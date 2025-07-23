import React from 'react';
import './HeroSlide.scss';

const HeroSlide = ({ image, caption }) => {
    return (
        <div className="hero-slide" style={{ backgroundImage: `url(${image})` }}>
            <button className="hero-button">{caption}</button>
        </div>
    );
};

export default HeroSlide;