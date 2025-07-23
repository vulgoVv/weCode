import React from 'react';
import './CategoryCard.scss';

const CategoryCard = ({ image, name }) => {
  return (
    <div className="category-card">
      <a href="#">
        <img src={image} alt={name} />
        <p>{name}</p>
      </a>
    </div>
  );
};

export default CategoryCard;