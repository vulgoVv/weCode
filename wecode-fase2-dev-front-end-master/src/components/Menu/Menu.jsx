import React, { useState } from 'react';
import './Menu.scss';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { IoIosClose } from "react-icons/io";
import Logo from '../Logo/Logo';
import menuBannerImage from '../../assets/images/banners/menu.jpg'

const Menu = ({ isOpen, onClose }) => {

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const isSapatosOpen = openSubmenu === 'sapatos';

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <Logo color="black" />
        <button className="icon-button" onClick={onClose}>
          <IoIosClose size={24} />
        </button>
      </div>

      <div className="menu-banner">
        <a href="#">
          <img src={menuBannerImage} alt="Celebration 20 Anos" />
        </a>
      </div>

      <nav className="menu-nav">
        <ul>
          <li><span>Liquida</span> <FiChevronRight /></li>

          <li onClick={() => handleSubmenuClick('sapatos')} className={isSapatosOpen ? 'active' : ''}>
            <span>Sapatos</span>
            {isSapatosOpen ? <FiChevronDown /> : <FiChevronRight />}

              <ul className="submenu">
                <li><span>Scarpins</span></li>
                <li><span>Mocassim</span></li>
                <li><span>Sapatilhas</span></li>
                <li><span>Mules</span></li>
                <li><span>Peep Toe</span></li>
                <li><span>Oxford</span></li>
              </ul>
          </li>

          <li><span>Sandálias</span> <FiChevronRight /></li>
          <li><span>Botas</span> <FiChevronRight /></li>
          <li><span>Tênis</span> <FiChevronRight /></li>
          <li className="outlet"><span>Outlet</span></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;