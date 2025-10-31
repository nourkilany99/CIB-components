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
import Button2 from '../common/Button2';
import Newscard from '../common/Newscard';
import newsimg from '../img/newsimg.png';
import Button from '../common/Button';
import Workwith from '../common/Workwith';
import logo_exchange1 from '../img/logo_exchange1.png';
import logo_exchange2 from '../img/logo_exchange2.png';
import logo_exchange3 from '../img/logo_exchange3.png';
import priv_icon from '../img/priv_icon.png';
import award_icon from '../img/award_icon.png';
import trans_icon from '../img/trans_icon.png';
import Workwithus2 from '../common/Workwithus2';
import web from '../img/web.png';
import phone from '../img/phone.png';
import branch from '../img/branch.png';
import Applycard2 from '../common/Applycard2';

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

  
       <Button2 title='View more'/>
    
       </div>

       <div className='div_news_all'>
        <Subtitle title='News' />
        <Newscard img={newsimg} title1='08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title2='Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title3='CIB, Egypts leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.'/>
        <Newscard img={newsimg} title1='08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title2='Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title3='CIB, Egypts leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.'/>
        <Newscard img={newsimg} title1='08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title2='Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion' title3='CIB, Egypts leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.'/>
        <Button2 title='View all news'/>
       </div>

       <div className='shake_hands_div'>
       <div className='shake_hands_img'>

          <div className='card_w_shake'>
            <h1>CIB on an international scale</h1>
            <p>Learn more about CIB's presence outside of Egypt</p>
            <Button title='Learn more'/>

          </div>
       </div>
       </div>

       <div className='div_all_work_with'>
        <Titlecard title='Sustainable finance'/>
        <Subtitle title=' Sustainability is an integral part of the way we work' />

        <div className='workwith_crd_d'>
        <Workwith title='S&P/EGX ESG Index'  img={logo_exchange1} />
        <Workwith title='S&P/EGX ESG Index'  img={logo_exchange2} />
        <Workwith title='S&P/EGX ESG Index'  img={logo_exchange3} />
        </div>

       <Button2 title='Learn more'/>
       
       </div>


       <div className='div_all_work_with'>
        <Titlecard title='Awards'/>
        <Subtitle title='  CIB s integrity and quality are recognized internationally' />

        <div className='workwith_crd_d2'>
        <Workwithus2 title='Best Private Bank in Egypt'  title2='Global Finance - 2023' img={priv_icon} />
        <Workwithus2 title='Best Mergers & Acquisitions Deal in MENA'  title2='EMEA Finance - 2023' img={award_icon} />
        <Workwithus2 title='Best Bank in Egypt'  title2='Euromoney - 2023' img={trans_icon} />
        </div>

       <Button2 title='Learn more'/>
       
       </div>

       <div className='div_all_meeting'>
        <Titlecard title='We care' />
        <Subtitle title=' Our dedicated team is committed to meeting your needs'/>


        <div className='apply_card'>
          <Applycard2 img={web} title="Online" title1="Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media."/>
          <Applycard2 img={phone} title="On the phone" title1="For support, including emergencies such as cards closure or immediate critical feedback." />
          <Applycard2 img={branch} title="In branch"  title1="Our trained team of tellers and relationship managers are here to help you get the service you need."/>
        </div>
       </div>
    </>
  );
};

export default Home;
