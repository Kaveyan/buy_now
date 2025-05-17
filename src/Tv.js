import React from 'react'
import logo3 from './tv1.png';
import "./Tv.css";
import Product from './Tvproduct';
import s1 from './pngegg 1.png';
import s2 from './tv (1).png';
import s3 from './tv (2).png';
import s4 from './tv (3).png';
import s5 from './tv (4).png';
import s6 from './tv (5).png';
import s7 from './tv (6).png';
import s8 from './tv (7).png';
import s9 from './tv (8).png';
import s10 from './tv (9).png';
import s11 from './tv (10).png';
import s12 from './tv (11).png';

function Tv() {
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
              title="Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
              price={499.99}
              rating={5}
              image={s1}
              
  
            />
           
         
          
            <Product
              className="element2"
              id="2"
              title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)"
              price={339.99}
              rating={4}
              image={s2}
  
            />
          
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
            price={999.99}
            rating={5}
            image={s3}
  
          />
          <Product
            id="4"
            title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)"
            price={599.99}
            rating={4}
            image={s4}
  
          />
          <Product
            id="5"
            title="VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black)"
            price={109.99}
            rating={5}
            image={s5}
  
          />
          <Product
            id="6"
            title="MI 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)"
            price={200.99}
            rating={5}
            image={s6}
  
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)"
            price={199.99}
            rating={3}
            image={s7}
            
          />
          
          <Product
            id="8"
            title="MI 100 cm (40 inches) 5A Series Full HD Smart Android LED TV L40M7-EAIN (Black)"
            price={669.99}
            rating={4}
            image={s8}
  
          />
        </div>
        <div className="home_row">
          <Product
            id="9"
            title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
            price={899.99}
            rating={5}
            image={s9}
  
          />
          <Product
            id="10"
            title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
            price={52.99}
            rating={4}
            image={s10}
  
          />
  
            <Product
            id="11"
            title="iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV iFF32S53 (Black)"
            price={944.99}
            rating={5}
            image={s11}
  
            />
    
            <Product
            id="12"
            title="LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UQ7500PSF (Ceramic Black)"
            price={399.99}
            rating={3}
            image={s12}
  
            />
    
        </div>
  
        
  
      </div>
    )
  }
  
  export default Tv;