import React, { Component } from 'react';
import './Centercards.css'

const Centercards = (props) => {
    return ( 
      <div className='center_card'>

        <div className='center_card_img'>
        <img className='img_cntr' src={props.img} alt={props.title} />
        </div>

        <div className='center_card_cntnt'>
            <h1 className='card_centr_h'>{props.title1}</h1>
            <p className='card_centr_p'> {props.title2}</p>
        </div>

        <div className='center_readmore_d'>
            <p className='btn_read_crd'>{props.title3}</p>
        </div>

      </div>
     );
}
 
export default Centercards;