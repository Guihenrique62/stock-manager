import React from 'react';
import './QuatityBoxStyle.scss';

export default function QuantityBox({title,quantity}){

    return(
        <div className='quantityBox'>
            <p className='contentTitle'>{title}</p>
            <p className='contentQuantity'>{quantity}</p>
        </div>
    )
}