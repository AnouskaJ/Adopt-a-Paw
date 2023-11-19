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
          <Link to="/other"><li><a>Home</a></li></Link>
          <Link to="/other"><li><a>About Us</a></li></Link>
          <Link to="/other"><li><a>Adopt</a></li></Link>
         
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
            <p className="h1">Your pet needs grooming? We are here!</p>
            <span className="h1 span">Available on all weekdays! </span>
          </div>
          <p className="p">We provide all kinds of pet grooming services right at your home!</p>
        </div>
      </div>
      <div className="cards">
        <div className="img"></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">Want to become a caretaker?</p>
          </div>
          <p className="p">Want to become a part of the adopt-a-paw family? Register with us now!</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardComponent;
