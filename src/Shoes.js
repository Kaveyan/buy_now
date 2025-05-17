import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './mainlogo2.png';
import "./Tv.css";
import s1 from './s1.png';
import s2 from './shoes.png';
import s3 from './shoes1.png';
import s4 from './shoes2.png';
import s5 from './shoes4.png';
import s6 from './shoes5.png';
import s7 from './shoes6.png';
import s8 from './shoes7.png';
import s9 from './shoes8.png';


function Shoes() {
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
                title=" white Dial Men's Watch-TW0TG6107"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="Unisex-Adult Watch"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title=" Men's Watch (Black Dial Black Colored Strap)"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="Youwen Watch Men's  Watch LED Display Digital "
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="gray Dial Men's Watch-TW000R438"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title=" New Track Number Dial Day Date Functioning Leather"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="Silicone Strap Wrist Watch"
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="Shocknshop
              Stainless  Watch Series Analogue"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="Two Tone Chrono Look Watch"
              price={899.99}
              rating={5}
              image={s9}
    
            />
            
      
          </div>
    
          
    
        </div>
      )
}

export default Shoes