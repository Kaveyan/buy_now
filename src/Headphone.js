import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './hs.png';
import "./Tv.css";
import s1 from './pngegg 4.png';
import s2 from './hp (1).png';
import s3 from './hp (2).png';
import s4 from './hp (3).png';
import s5 from './hp (4).png';
import s6 from './hp (5).png';
import s7 from './hp (6).png';
import s8 from './hp (7).png';
import s9 from './hp (8).png';
import s10 from './mb (9).png';
import s11 from './mb (10).png';
import s12 from './mb (11).png';

function Headphone() {
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
                title="Boult Audio Anchor Bluetooth Wireless Over Ear Headphones with Mic, Active Noise Cancellation"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="Zebronics-Bang over the ear headphones with Foldable Design and Bluetooth v5.0 headphones"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="JBL Tune 760NC, Wireless Over Ear Active Noise Cancellation Headphones with Mic"
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="boAt Rockerz 550 Bluetooth Wireless Over Ear"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="CrossBeats Roar Hybrid ANC Headphones"
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="MAONO AU-MH501 Over-Ear Wired Studio Headphones"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="Philips Audio TAH6506BK/00 Slim & Lightweight Bluetooth Wireless  "
              price={899.99}
              rating={5}
              image={s9}
    
            />
            
      
          </div>
    
          
    
        </div>
      )
    }

export default Headphone