import React from 'react';
import './Hero_s.css';
import Button from '../common/Button';
import Heroimg from '../img/hero_img.png';

const Hero = () => {
  return (
    <section>

      <img className="hero_s" src={Heroimg} alt="hero" />

      <div className="cntnt_hero">
        <h1>CIB</h1>
        <p className='her_p'>Delivering value to our clients, our community and our shareholders</p>

        <Button title="Discover more"/>

      </div>
      
    </section>
  );
};

export default Hero;
