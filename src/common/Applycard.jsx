import React, { Component } from 'react';
import './Applycard.css'

const Applycard = (props) => {
    return (  

        <div className='apply_des_crd'>
            <img src={props.img} alt={props.title} />
            <p className='apply_crd_p'>{props.title}</p>
        </div>
    );
}
 
export default Applycard;