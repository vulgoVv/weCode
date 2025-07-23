import React, { useState } from 'react';
import './ProductCard.scss';
import { TbShoppingBagPlus } from "react-icons/tb";
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const ProductCard = ({ product, onAddToCart }) => {
    const { amount, isDiscount } = product.price;

    const formatPrice = (value) => {
        return value.toFixed(2).replace('.', ',');
    };

    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} />

                <div className="product-icons">

                    <button className="icon-button" onClick={handleFavoriteClick}>
                        {isFavorited ? <BsHeartFill color="red" /> : <BsHeart />}
                    </button>

                    <button className="icon-button cart-button" onClick={onAddToCart}>
                        <TbShoppingBagPlus />
                    </button>
                </div>

                {isDiscount && <span className="discount-tag">10% OFF</span>}
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                    {isDiscount ? (
                        <>
                            <span className="original-price">R$ {formatPrice(amount)}</span>
                            <span className="discount-price">R$ {formatPrice(isDiscount)}</span>
                        </>
                    ) : (
                        <span className="normal-price">R$ {formatPrice(amount)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;