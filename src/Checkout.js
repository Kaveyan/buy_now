import React from 'react'
import "./Checkout.css";
import ad from "./ad.png"
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket},dispatch]= useStateValue();
  return (
    <div className='checkout' >
        <div className="checkout_left">
            <img className='checkout_ad'
            src={ad} alt =""/>

            <div className='items'>
                <h2 className=' checkout_title'>Your Shopping Basket</h2>
                {basket.map(item=>(
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
        <div className='checkout_right'>
            <Subtotal/>
        </div>


    </div>
  )
}

export default Checkout;