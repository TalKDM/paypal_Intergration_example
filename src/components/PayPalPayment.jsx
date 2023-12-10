import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = (props) => {
  const {product} = props;
  const {title, price} = product;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    //call backend function to fulfill order

    //if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    //if the response is error 
    //setError("Error");
  };

  if (paidFor) {
    //Display success message , modal or redirect to success page

    alert("thank you for your purchase");
  }

  if (error) {
    //Display error message , modal or redirect the user to the error page;
    alert(error);
  };

  return (
    <PayPalButtons
    onClick={(data, actions) => {
      //Validate on button click, client or server side 
      const hasAlreadyBoughtCourse = false;

      if (hasAlreadyBoughtCourse) {
        setError("you already bought this item, go to your account ")
        return actions.reject();
      } else {
        return actions.resolve();
      }
    }}
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: title,
            amount: {
              value: price,
            },
          },
        ],
      })
    }}
    onApprove={ async (data, actions) => {
      const order = await actions.order.capture();
      console.log("order", order);
      handleApprove(data.orderID);
    }}
    onCancel={() => {
      //Display the cancel message, modal or redirect the user to cancel page or back to cart
    }}
    onError={(err) => {
      setError(err);
      console.error("Paypal checkout onError", err);
    }}
    />
  );
};

export default PayPalPayment