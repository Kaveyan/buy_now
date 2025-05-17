import React from 'react';
import Product from './HeadsetProduct';
import logo3 from './hs.png';
import "./Tv.css";
import s1 from './pngegg 3.png';
import s2 from './hs (1).png';
import s3 from './hs (2).png';
import s4 from './hs (3).png';
import s5 from './hs (4).png';
import s6 from './hs (5).png';
import s7 from './hs (6).png';
import s8 from './rr.webp';
import s9 from './hs (1).png';
import s10 from './hs (9).png';
import s11 from './hs (10).png';
import s12 from './hs (11).png';

function Headset() {
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
                title="PHILIPS Audio TAE1126 Wired in Ear Earphones with mic"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="JBL C100SI Wired In Ear Headphones with Mic"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Furious Red)"
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="PTron Pride Lite HBE (High Bass Earphones) in Ear Wired Earphones with Mic"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title="Samsung Original EHS64 Wired in Ear Earphones with Mic, Black"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="Boult Audio BassBuds X1 in-Ear Wired Earphones"
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="realme Buds 2 Neo Wired in Ear Earphones with Mic "
              price={899.99}
              rating={5}
              image={s9}
    
            />
            <Product
              id="10"
              title="boAt BassHeads 225 in-Ear Super Extra Bass Wired"
              price={52.99}
              rating={4}
              image={s10}
    
            />
    
              <Product
              id="11"
              title="Boult Audio FXCharge Wireless in Ear Bluetooth Neckband with ENC Mic"
              price={944.99}
              rating={5}
              image={s11}
    
              />
      
              <Product
              id="12"
              title="JBL C200SI, Premium in Ear Wired Earphones with Mic"
              price={399.99}
              rating={3}
              image={s12}
    
              />
      
          </div>
    
          
    
        </div>
      )
    }


export default Headset;