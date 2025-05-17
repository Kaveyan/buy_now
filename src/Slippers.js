import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './shmain.png';
import "./Tv.css";
import s1 from './pngegg 9.png';
import s2 from './ms (1).png';
import s3 from './ms (2).png';
import s4 from './ms (3).png';
import s5 from './ms (4).png';
import s6 from './ms (5).png';
import s7 from './ms (6).png';
import s8 from './ms (7).png';
import s9 from './ms (8).png';

function Slippers() {
    return (
        <div className='home'>
          <img
            className='home_im'
            src={logo3}
            alt=""
          />
      
          
          <div className="home_row">
           
              <Product
                className="element1"
                id="1"
                title="Mens WAVER Slippers, Grey"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="Men's Flip Flops Thong Slippers"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="Men Blue & Grey Premium EVA Slippers & Flipflops"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="BATA
              Men's Orthorise Slipper "
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="Campus
              Men's SL-433 Slides"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title="Sparx
              Mens Sf0204G Red Black Flip Flop - 10 Uk (Sf0204G)"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="BATA
              Men's Healer Grey Slipper-10 Kids UK (8712609)"
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="Slipper Care Orthopaedic and Diabetic Super Fit Comfort"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="Men's Alphabounce-9 Comfortable | Ultra-Light"
              price={899.99}
              rating={5}
              image={s9}
    
            />
           
      
          </div>
    
          
    
        </div>
      )
}

export default Slippers