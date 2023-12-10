import React, { useState } from 'react';
import './main.css';
import Rater from './Rater';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    const {products, setProd} = props;

    const nav = useNavigate();

  return (
    <div className='main'>
        <h1>Products</h1>
        <div className="products">
            {
                products.map((product, index) => {
                    const {title, price, image, rating} = product;
                    const {rate, count} = rating;

                    const checkOut = () => {
                        setProd({...product});
                        nav('/checkout')
                    };

                    return (
                        <div className='product'>
                            <img src={image} title={title} width="130px"/>
                            <h4>{title}</h4>
                            <h3>{`$${price}`}</h3>
                            <h5>{rate} <Rater rate={rate} count={count}/></h5>
                            <button onClick={checkOut}>Checkout</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Main