import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket},dispatch]=useStateValue();
  const navigate = useNavigate();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket && basket.length} items):<strong>{value}</strong>
            </p>
            
            
            </>
        )}
        decimalScale={2}
        /*value={0}*/
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"₹"}
        />
        <button onClick={e => navigate('/payment')}>proceed to checkout</button>

    </div>
  )
}

export default Subtotal;