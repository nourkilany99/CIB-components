import React, { Component } from 'react';
import './Footer.css'
import Logo from '../img/CibLogo.png'
import App from '../img/store.png'
import icons_ftr from '../img/social_icons.png'

const Footer = () => {
    return ( 
        <div className='footer_all'>

          <div className='footer_cntnt'>

            <div className='footer_logo'>
                <img className='logo_ftr' src={Logo} alt="logo"/>
            </div>

            <div className='footer_cntnt_d1'>
                <p>FAQs</p>
                <p>Learning Center</p>
                <p>Fees & Charges</p>
                <p>Terms & Conditions</p>
            </div>

             <div className='footer_cntnt_d1'>
                <p>Local</p>
                <p>Abroad</p>
                <p>Business</p>
                <p>Corporate</p>
            </div>

             <div className='footer_cntnt_d1'>
                <p>Careers</p>
                <p>Why CIB</p>
                <p>Email us</p>
                <p>System Status</p>
            </div>

            <div className='logo_store_d'>
                <img className='logo_ftr' src={App} alt="app" />
            </div>
            
          </div>

          <div className='footer_line'>

            <div className='footer2_cntntn'>
            <p>CBE Approvals</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>User Agreements</p>
            </div>

            <div className='logo_store_d'>
                <img className='icons_ftr' src={icons_ftr} alt="licons_ftr"/>
            </div>
          </div>

          <div className='footer_end'>
            <p>Copyright © 2025 Commercial International Bank</p>
          </div>
          
        </div>
     );
}
 
export default Footer;