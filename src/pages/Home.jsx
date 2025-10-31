import React from 'react';
import Header from '../Components/Header';
import './Home.css';
import Hero from '../Components/Hero';
import Smallmenu from '../common/Smallmenu';
import '../common/Smallmenu.css';
import Titlecard from '../common/Titlecard';
import Subtitle from '../common/Subtitle';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className='small_menu_d'>
      <Smallmenu title="Apply Online"/>
      <Smallmenu title="News"/>
      <Smallmenu title="Blog Articles"/>
      <Smallmenu title="CIB International"/>
      <Smallmenu title="Sustainable Finance"/>
      <Smallmenu title="Awards"/>
      </div>

      <div className='options_apply'>
        <Titlecard title="Apply online"/>
        <Subtitle title=" Apply online now for cards and loans with ease!"/>
      </div>

    </>
  );
};

export default Home;
