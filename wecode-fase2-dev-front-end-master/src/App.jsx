import React, { useState, useEffect } from 'react';
import './App.scss';
import banner1 from './assets/images/banners/banner1.jpg';
import banner2 from './assets/images/banners/banner2.jpg';
import banner3 from './assets/images/banners/banner3.jpg';
import infoBanner1 from './assets/images/banners/info1.png';
import infoBanner2 from './assets/images/banners/info2.png';
import infoBanner3 from './assets/images/banners/info3.png';
import { getProducts } from './utils.js';
//
import botas from './assets/images/categorias/botas.png'
import scarpins from './assets/images/categorias/scarpins.png'
import sapatilhas from './assets/images/categorias/sapatilhas.png'
import sandalias from './assets/images/categorias/sandalias.png'
//
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx'
import PromoBanners from './components/PromoBanners/PromoBanners';
import Notification from './components/Notification/Notification';
//
import HeroSlider from './components/HeroSlide/HeroSlider.jsx'
import CategorySlider from './components/CategorySlider/CategorySlider';
import ProductSlider from './components/ProductSlider/ProductSlider';
import InfoSlider from './components/InfoSlider/InfoSlider';
import Footer from './components/Footer/Footer'

//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const infoSlidesData = [
  { id: 1, image: infoBanner1 },
  { id: 2, image: infoBanner2 },
  { id: 3, image: infoBanner3 }
];

const categoriesData = [
  { id: 1, image: botas, name: 'Botas' },
  { id: 2, image: scarpins, name: 'Scarpins' },
  { id: 3, image: sapatilhas, name: 'Sapatilhas' },
  { id: 4, image: sandalias, name: 'Sandálias' }
]

const heroSlidesData = [
  { id: 1, image: banner1, caption: 'Conheça agora!' },
  { id: 2, image: banner2, caption: 'Ver Coleção' },
  { id: 3, image: banner3, caption: 'Nossas Peças' }
];

function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => { setMenuOpen(!isMenuOpen); };

  const [products, setProducts] = useState([]);

  const [notification, setNotification] = useState({
    show: false,
    message: '',
  });

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
    };

    loadProducts();
  }, []);

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);

    setNotification({ show: true, message: 'Adicionado ao carrinho' });

    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="App">
      <Header onMenuClick={toggleMenu} cartCount={cartCount} />

      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />

      <main>
        <HeroSlider slides={heroSlidesData} />
        <CategorySlider categories={categoriesData} />
        <PromoBanners />
        {products.length > 0 && <ProductSlider products={products} onAddToCart={handleAddToCart} />}
        <InfoSlider slides={infoSlidesData} />
      </main>

      <Footer />
      
      <Notification notification={notification} />
    </div>
  );
}

export default App;
