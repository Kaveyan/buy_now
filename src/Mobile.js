import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './mb0.png';
import "./Tv.css";
import s1 from './pngegg 2.png';
import s2 from './mb (1).png';
import s3 from './mb1 (2).png';
import s4 from './mb (3).png';
import s5 from './mb (4).png';
import s6 from './mb (5).png';
import s7 from './mb (6).png';
import s8 from './mb (7).png';
import s9 from './mb1 (1).png';
import s10 from './mb (9).png';
import s11 from './mb (10).png';
import s12 from './mb (11).png';

function Mobile() {
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
                title="APPLE iPhone 4 (256 GB)"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="realme C55 (Rainy Night, 128 GB)  (8 GB RAM)"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="APPLE iPhone 14 Pro (Deep Purple, 128 GB)"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)  (12 GB RAM))"
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="Nothing Phone (1) (White, 256 GB)"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title="REDMI Note 12 Pro 5G (Glacier Blue, 128 GB)  (6 GB RAM))"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)"
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="APPLE iPhone 14 Plus (Midnight, 128 GB)"
              price={899.99}
              rating={5}
              image={s9}
    
            />
            <Product
              id="10"
              title="Redmi (32 inches) Android 11 Series (Black)"
              price={52.99}
              rating={4}
              image={s10}
    
            />
    
              <Product
              id="11"
              title="APPLE iPhone 14 ((PRODUCT)RED, 512 GB)"
              price={944.99}
              rating={5}
              image={s11}
    
              />
      
              <Product
              id="12"
              title="OPPO A17 (Midnight Black, 64 GB)"
              price={399.99}
              rating={3}
              image={s12}
    
              />
      
          </div>
    
          
    
        </div>
      )
    }
    


export default Mobile