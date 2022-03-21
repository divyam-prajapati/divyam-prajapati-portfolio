import React from 'react';
import './header.css';
import arrow from '../../assets/arrow-down.svg';

const Header = () => {
  return (
    <div className='portfolio__header section__padding' id="home">
      <div className="portfolio__header-content">
        <div className='portfolio__header-content-text'>
          <h3 className='gradient__text tracking-in-expand-fwd'>
            Hello, World!
          </h3>
          <h3 className='gradient__text tracking-in-expand-fwd'>
            I am ...
          </h3>
          <h1 className='gradient__text tracking-in-expand-fwd'>
            Divyam
          </h1>
          <h2 className='gradient__text tracking-in-expand-fwd'>
            Prajapati
          </h2>
        </div>
        
        <div className="portfolio__header-content-scroll">
          <p className='text-shadow-drop-center'>
            Scroll down to learn more about me 
          </p>
          <img src={arrow} alt="Down Arrow" className='move'/>
        </div>
      </div>
    </div>
  )
}

export default Header