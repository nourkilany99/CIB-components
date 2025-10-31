import React, { Component } from 'react';
import './Applycard2.css'

const Applycard2 = (props) => {
    return (  

        <div className='apply_des_crd2'>
            <img src={props.img} alt={props.title} />

            <div className='d_apply_extra'>
            <p className='apply_crd_p3'>{props.title}</p>
            <p className='apply_crd_p2'>{props.title1}</p>
            </div>
        </div>
    );
}
 
export default Applycard2;