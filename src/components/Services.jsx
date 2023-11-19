import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardComponent = () => {
     const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
        <header className={isSticky ? 'sticky' : ''}>
        <a href="#" className="logo">Adopt-a-<span>Paw</span></a>
        <div className={`menutoggle ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        <ul className={`navigation ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#banner">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Adopt</a></li>
          <Link to="/login"><li><a>Login</a></li></Link>
          <Link to="/services"><li><a>Services</a></li></Link>
          <li><a href="#contactus">Contact</a></li>
        </ul>
      </header>
      <div className='backgroundc'>
        <h1 className='headerc'>Got some work? We will take care of your pets for you!</h1>
      <div className="cards">
        <div className="img"></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">Leave your pets with us!</p>
            <p><span className="h1 span">Available on all days </span></p>
          </div>
          <p className="p">Enjoy a tension-free vacation while we take care of your pets</p>
        </div>
      </div>

      <div className="cards">
        <div className="img"></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">Leave your pets with us!</p>
            <span className="h1 span">Available on all days </span>
          </div>
          <p className="p">Enjoy a tension-free vacation while we take care of your pets</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardComponent;
