import React from 'react'
import logo3 from "./mainlogo2.png";
import "./Home.css";
import Product from './Product';
import s1 from "./pngegg 1.png"
import s2 from "./pngegg 2.png"
import s3 from "./pngegg 3.png"
import s4 from "./pngegg 4.png"
import s5 from "./pngegg 5.png"
import s6 from "./pngegg 6.png"
import s7 from "./s1.png"
import s8 from "./s2.png"
import s9 from "./pngegg 9.png"
import s10 from "./pngegg 10.png"
import s11 from "./11.png"
import s12 from "./12.png"
function Home() {
  return (
    <div className='home'>
        
       
      <a href="http://localhost:3000/mobile">
        <img className='home_image' src={logo3} alt=""/>
      </a>
        

      <div className="home_row">
        
      
          <Product
            id="1"
            title="Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
            price={5999.99}
            rating={5}
            image={s1}
          />
        
          
  
          <Product
          id="2"
          title="APPLE iPhone 4 (256 GB)"
          price={55599.99}
          rating={4}
          image={s2}
          />
      </div>
      
      <div className="home_row">
          
          <Product
          id="3"
          title="PHILIPS Audio TAE1126 Wired in Ear Earphones with mic"
          price={999.99}
          rating={5}
          image={s3}
          />
  
          <Product
          id="4"
          title="Boult Audio Anchor Bluetooth Wireless Over Ear Headphones with Mic, Active Noise Cancellation"
          price={599.99}
          rating={4}
          image={s4}
          />

          <Product
          id="5"
          title="Analog Black Dial Men's Watch-TW0TG6107"
          price={899.99}
          rating={5}
          image={s5}
          />
  
          <Product
          id="6"
          title="Fire-Boltt Visionary 1.78 AMOLED Bluetooth"
          price={1299.99}
          rating={5}
          image={s6}
          />
  
      </div>

      <div className="home_row">
          <Product
          id="7"
          title="Mens Flex Experience Rn 0 Nn Running"
          price={2299.99}
          rating={3}
          image={s7}
          />
  
          <Product
          id="8"
          title="Men's Shoes Air Max 97 USA (220) CW5584-100"
          price={1299.99}
          rating={4}
          image={s8}
          />
      </div>

      <div className="home_row">
          
          <Product
          id="9"
          title="Mens WAVER Slippers, Grey"
          price={799.99}
          rating={5}
          image={s9}
          />
  
          <Product
          id="10"
          title="Leader Scout MTB 26T Mountain Bicycle/Bike Without Gear Single Speed for Men"
          price={6999.99}
          rating={4}
          image={s10}
          />

          <Product
          id="11"
          title="Kuvings B1700 Dark Silver Professional Cold Press Whole Slow Juicer "
          price={5999.99}
          rating={5}
          image={s11}
          />
  
          <Product
          id="12"
          title="MOKOBARA The Transit Backpack Laptop Bag for Men "
          price={999.99}
          rating={3}
          image={s12}
          />
  
      </div>

      

    </div>
  )
}

export default Home;