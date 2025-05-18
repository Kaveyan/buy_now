import React from 'react';
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket},dispatch]=useStateValue();
  const navigate = useNavigate();
  return (
    <div className='subtotal'>
        <NumericFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
        decimalScale={2}
        renderText={(value) => (
            <p>
                Subtotal ({basket && basket.length} items):<strong>{value}</strong>
            </p>
        )}
        />
        <button onClick={e => navigate('/payment')}>proceed to checkout</button>

    </div>
  )
}

export default Subtotal;