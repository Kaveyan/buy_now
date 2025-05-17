import React from 'react'
import"./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price,rating}) {

  const [{basket},dispatch] = useStateValue();
  const removefromthebasket = ()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    })

  }



  return (
    <div className='checkoutProduct'>
         <img className="checkoutProduct_image"src={image}/>
        <div className='checkoutProduct_info'>
             <p className="checkoutProduct_title">{title}</p>
             <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
           
          </p>
        </div>
        
        <div className='checkoutProduct_rating'>
         {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐</p>

          ))
          }
          
        </div>
        <button on onClick={removefromthebasket}>Remove from cart</button>
   
    </div>
  )
}

export default CheckoutProduct;