import React from 'react';
import './checkout.css';
import Rater from '../main/Rater';
import PayPalPayment from '../../components/PayPalPayment';

const Checkout = (props) => {
    const {prod} = props;
    const {title, price, image, rating} = prod;
    const {rate, count} = rating;

  return (
    <div className='mainCheckout'>
        <img src={image} width="250px" />
        <h2>{title}</h2>
        <h3>{`$${price}`}</h3>
        <h3>{rate} <Rater rate={rate} count={count}/></h3>
        <button className='butNowBtn'>Buy Now</button>
        <PayPalPayment product={prod} />
    </div>
  )
}

export default Checkout