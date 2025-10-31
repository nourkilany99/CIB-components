import React from 'react';
import Header from '../Components/Header';
import './Home.css';
import Hero from '../Components/Hero';
import Smallmenu from '../common/Smallmenu';
import '../common/Smallmenu.css';
import Titlecard from '../common/Titlecard';
import Subtitle from '../common/Subtitle';
import Applycard from '../common/Applycard';
import icon_round1 from '../img/cib_icon_round.png';
import icon_round2 from '../img/card_icon_round.png';
import icon_round3 from '../img/loan_icon_round.png';

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

        <div className='apply_card'>
          <Applycard img={icon_round1} title="Apply for a new card"/>
          <Applycard img={icon_round2} title="Apply for a card"/>
          <Applycard img={icon_round3} title="Apply for a loan or overdraft"/>
        </div>
      </div>

    </>
  );
};

export default Home;
