import React, { Component } from 'react';
import './Workwith.css'

const Workwith = (props) => {
    return (
        <>
        <div className='div_workwith_all'>
        <img className='img_workwith' src={props.img} alt={props.title} />
        <p className='workwith_p'> {props.title}</p>
        </div>
        </>
     );
}
 
export default  Workwith;