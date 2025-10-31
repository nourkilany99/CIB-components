import React, { Component } from 'react';
import './Newscard.css'

const  Newscard = (props) => {
    return ( 

        <div className='div_all_news_card'>

            <div  className='img_news_card'>
                <img className='img_news' src={props.img} alt={props.title} />
            </div>

            <div className='cntnt_news_card'>
                <p className='card_news_p'> {props.title1}</p>
                <p className='card_news_p2'> {props.title2}</p>
                <p className='card_news_p3'> {props.title3}</p>
            </div>
        </div>
     );
}
 
export default Newscard;