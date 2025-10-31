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
import Centercards from '../common/Centercards';
import center_img1 from '../img/center_img1.png';
import center_img2 from '../img/center_img2.png';
import center_img3 from '../img/center_img3.png';

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


       <div className='div_center_all'>
        <Subtitle title=" Learning Center"/>
        <Titlecard title="Learn more about banking and your finances"/>

        <div className='div_center_cards_all'>
        <Centercards title1="Buying and making a home"  img={center_img1} title2="Buying a home can be an emotional process,but it's important to approach it logically" title3='Read more' />
        <Centercards title1="Traveling on a budget"  img={center_img2} title2="So for all of you travelers,take a vacation without spending a fortune with these helpful tips and tricks" title3='Read more' />
        <Centercards title1="University life tips"  img={center_img3} title2="The impact of a good education can be transformative."  title3='Read more'/>
        </div>

       </div>

    </>
  );
};

export default Home;
