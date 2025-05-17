import React from 'react';
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating,}) {

  const [{basket},dispatch] = useStateValue();

  console.log("this is the basket >>>",basket);

  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });


  };
  {/*const handleClick = () => {
    if (id == 1) {
      window.location.href = "http://localhost:3000/tv";
    } else {
      console.log("Product with ID " + id + " was not clicked");
    }
  };*/}
  return (
    <div className='product'>
      <div className='product_info'></div>
       <p>{title}</p> 
       <p className='product_price'>
        <small>₹</small>
        <strong>{price}</strong>
       </p>

       <div className='product_rating'>
         {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐</p>

          ))
          }
        <div/>

      </div>
      
      <img src={image} alt=""  />
      
      {/*<button onClick={handleClick}>More</button>*/}
      
      <button onClick={addToBasket}>Add to Cart</button>
     

      
    </div>

  );
}

export default Product;