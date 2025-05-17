import React from 'react'
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './mainlogo4.png';
import "./Tv.css";
import s1 from './11.png';
import s2 from './j (1).png';
import s3 from './j (2).png';
import s4 from './j (3).png';
import s5 from './j (4).png';
import s6 from './j (5).png';
import s7 from './j (6).png';
import s8 from './j (7).png';
import s9 from './j (8).png';


function juicer() {
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
            title="Kuvings B1700 Dark Silver Professional Cold Press Whole Slow Juicer "
            price={499.99}
            rating={5}
            image={s1}
            

          />
         
       
        
          <Product
            className="element2"
            id="2"
            title="Philips Viva Collection HR1832/00 1.5-Litre400-Watt Juicer (Ink Black)"
            price={339.99}
            rating={4}
            image={s2}

          />
        
      </div>
      <div className="home_row">
        <Product
          id="3"
          title=" Vegetable Steel Handle Juicer"
          price={999.99}
          rating={5}
          image={s3}

        />
        <Product
          id="4"
          title="NutriPro Juicer Mixer Grinder - Smoothie Maker "
          price={599.99}
          rating={4}
          image={s4}

        />
        <Product
          id="5"
          title="Instant Pot Mini Blender Fruit Mixer Machine Portable Electric Juicer "
          price={109.99}
          rating={5}
          image={s5}

        />
        <Product
          id="6"
          title="Ganesh Fruit & Vegetable Steel Handle Juicer"
          price={200.99}
          rating={5}
          image={s6}

        />
      </div>
      <div className="home_row">
        <Product
          id="7"
          title="Farberware 6 Blades Juicer Rechargeable Portable Electric "
          price={199.99}
          rating={3}
          image={s7}
          
        />
        
        <Product
          id="8"
          title="GaxQuly Electric Juicer 6 Blade Rechargable Portable"
          price={669.99}
          rating={4}
          image={s8}

        />
      </div>
      <div className="home_row">
        <Product
          id="9"
          title="Philips Viva Collection HR1832/00 1.5-Litre"
          price={899.99}
          rating={5}
          image={s9}

        />
       

          
  
      </div>

      

    </div>
  )
}

export default juicer;