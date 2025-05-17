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
  const handleClick = () => {
    if (id == 1) {
      window.location.href = "http://localhost:3000/tv";
    } 
    if (id == 2) {
      window.location.href = "http://localhost:3000/mobile";
    } 
    if (id == 3) {
      window.location.href = "http://localhost:3000/headset";
    } 
    if (id == 4) {
      window.location.href = "http://localhost:3000/headphone";
    } 
    if (id == 5) {
      window.location.href = "http://localhost:3000/watch";
    } 
    if (id == 6) {
      window.location.href = "http://localhost:3000/smartwatch";
    } 
    if (id == 7) {
      window.location.href = "http://localhost:3000/shoes";
    } 
    if (id == 8) {
      window.location.href = "http://localhost:3000/shoes";
    } 
    if (id == 9) {
      window.location.href = "http://localhost:3000/slippers";
    } 
    if (id == 10) {
      window.location.href = "http://localhost:3000/cycle";
    } 
    if (id == 11) {
      window.location.href = "http://localhost:3000/juicer";
    } 
    if (id == 12) {
      window.location.href = "http://localhost:3000/bag";
    } 
    
    else {
      console.log("Product with ID " + id + " was not clicked");
    }
  };
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
      
      <button onClick={handleClick}>More</button>
      
      {/*<button onClick={addToBasket}>Add to Cart</button>*/}
     

      
    </div>

  );
}

export default Product;