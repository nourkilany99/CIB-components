import React, {} from 'react';
import Logo from '../img/CibLogo.png';
import "./Header.css"


const Header = () => {
    return ( 

        <header>
            <div className='div_logo'>
               <img className='logo' src={Logo} alt="logo" />
            </div>
        </header>

     );
}
 
export default Header;