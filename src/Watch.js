import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './swmain.png';
import "./Tv.css";
import s1 from './pngegg 5.png';
import s2 from './w (1).png';
import s3 from './w (2).png';
import s4 from './w (3).png';
import s5 from './w (4).png';
import s6 from './w (5).png';
import s7 from './w (6).png';
import s8 from './w (7).png';
import s9 from './w (1).png';
import s10 from './w (9).png';
import s11 from './w (10).png';
import s12 from './w (11).png';

function Watch() {
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
            title="Analog Blue Dial Men's Watch-TW0TG6107"
            price={499.99}
            rating={5}
            image={s1}
            

          />
         
       
        
          <Product
            className="element2"
            id="2"
            title="Analog Unisex-Adult Watch"
            price={339.99}
            rating={4}
            image={s2}

          />
        
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="Analog Men's Watch (Black Dial Black Colored Strap)"
          price={999.99}
          rating={5}
          image={s3}

        />
        <Product
          id="4"
          title="Youwen Watch Men's Sports Watch LED Display Digital "
          price={599.99}
          rating={4}
          image={s4}

        />
        <Product
          id="5"
          title="Analog Black Dial Men's Watch-TW000R438"
          price={109.99}
          rating={5}
          image={s5}

        />
        <Product
          id="6"
          title="Analog New Track Number Dial Day Date Functioning Leather"
          price={200.99}
          rating={5}
          image={s6}

        />
      </div>
      <div className="home_row">
        <Product
          id="7"
          title="Silicone Strap Analog Wrist Watch"
          price={199.99}
          rating={3}
          image={s7}
          
        />
        
        <Product
          id="8"
          title="Shocknshop
          Stainless Steel Watch Series Analogue"
          price={669.99}
          rating={4}
          image={s8}

        />
      </div>
      <div className="home_row">
        <Product
          id="9"
          title="Two Tone Chrono Look Analog Stainless Steel Watch"
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
          title="Fashion Mens Watch Leather Luxury Brand Sports"
          price={944.99}
          rating={5}
          image={s11}

          />
  
          <Product
          id="12"
          title="Phoenix Collection Analog Black Dial"
          price={399.99}
          rating={3}
          image={s12}

          />
  
      </div>

      

    </div>
  )
  
}

export default Watch;