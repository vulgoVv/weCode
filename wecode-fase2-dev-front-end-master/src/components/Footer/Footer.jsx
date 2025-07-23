import React from 'react';
import Logo from '../Logo/Logo';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaTiktok } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <Logo color="white" />
      </div>

      <div className="social-icons">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaPinterest /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaTiktok /></a>
      </div>

      <div className="footer-links">
        <div className="link-section">
          <h4>Sobre a empresa</h4>
          <a href="">Quem somos</a>
          <a href="">Fale conosco</a>
        </div>
        <div className="link-section">
          <h4>Políticas</h4>
          <a href="">Política de Privacidade</a>
          <a href="">Termos de Uso</a>
          <a href="">Política de Entrega</a>
          <a href="">Política de Cupom e Descontos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;