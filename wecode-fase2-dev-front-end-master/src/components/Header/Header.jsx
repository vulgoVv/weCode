import React, { useState, useEffect } from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { RiShoppingBagLine } from "react-icons/ri";
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({ onMenuClick, cartCount }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClassName = isScrolled ? 'header-container scrolled' : 'header-container';
    const iconAndLogoColor = isScrolled ? 'black' : 'white';

    return (
        <header className={headerClassName}>
            <div className="header-left">
                <button className="icon-button" onClick={onMenuClick}>
                    <FiMenu size={24} color={iconAndLogoColor} />
                </button>
                <button className="icon-button">
                    <FiSearch size={24} color={iconAndLogoColor} />
                </button>
            </div>

            <div className="header-center">
                <Logo color={iconAndLogoColor} />
            </div>

            <div className="header-right">
                <button className="icon-button">
                    <FiUser size={24} color={iconAndLogoColor} />
                </button>

                <button className="icon-button cart-button">
                    <RiShoppingBagLine size={24} color={iconAndLogoColor} />
                    <span className="cart-count" style={{ color: iconAndLogoColor }}>{cartCount}</span>
                </button>
            </div>
        </header>
    );
};

export default Header;