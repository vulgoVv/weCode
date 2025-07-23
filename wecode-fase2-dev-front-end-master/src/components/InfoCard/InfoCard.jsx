import React from 'react';
import './InfoCard.scss';

const InfoCard = ({ image, title, text, linkText }) => {
  return (
    <div className="info-card">
      <img src={image} alt={title} className="info-card-image" />
      <div className="info-card-content">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-text">{text}</p>
        <a href="#" className="info-card-link">{linkText}</a>
      </div>
    </div>
  );
};

export default InfoCard;