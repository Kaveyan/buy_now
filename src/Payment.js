import React, { useState } from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { isAuthenticated } from "./Auth";
import { getBasketTotal } from './reducer';

export default function Payment({ user }) {
  const [{ basket }, dispatch] = useStateValue();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const userEmail = isAuthenticated() ? localStorage.getItem("userEmail") : null;

  const handleBuyButtonClick = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="payment">
      <div className='payment_container'>
        <h1>
          Checkout(<Link to="/checkout">{basket && basket.length} items</Link>)
        </h1>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123, South Street,</p>
            <p>Bit College,</p>
            <p>Sathy</p>
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title1'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title1'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <h3>Cash on Delivery</h3>
            <br>
            </br>
            <h4><p> {userEmail && <p>User: {userEmail}</p>}</p></h4>
            <h4><p>TotalBill: ₹{getBasketTotal(basket)}</p></h4><br></br>
            {orderPlaced ? (
              <p>Your order is placed and will be delivered within 2 days.</p>
              
            ) : (
              <button onClick={handleBuyButtonClick}>Click to buy</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
