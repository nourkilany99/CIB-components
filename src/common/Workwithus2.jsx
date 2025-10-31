import React, { Component } from 'react';
import './Workwith2.css'

const Workwith2 = (props) => {
    return (
        <>
        <div className='div_workwith_all'>
        <img className='img_workwith2' src={props.img} alt={props.title} />
        <p className='workwith_p'> {props.title}</p>
        <p className='workwith_p2'> {props.title2}</p>
        </div>
        </>
     );
}
 
export default  Workwith2;