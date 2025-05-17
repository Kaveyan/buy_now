import React from 'react';
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './mainlogo5.png';
import "./Tv.css";
import s1 from './12.png';
import s2 from './b (1).png';
import s3 from './b (2).png';
import s4 from './b (3).png';
import s5 from './b (4).png';
import s6 from './b (5).png';
import s7 from './b (6).png';
import s8 from './b (7).png';
import s9 from './b (8).png';
import s10 from './b (9).png';
import s11 from './b (10).png';


function Bag() {
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
            title="MOKOBARA The Transit Backpack Laptop Bag for Men and Women"
            price={499.99}
            rating={5}
            image={s1}
            

          />
         
       
        
          <Product
            className="element2"
            id="2"
            title="
            Sfane Polyester 23cms Duffle/Shoulder/Gym Bag for Men"
            price={339.99}
            rating={4}
            image={s2}

          />
        
      </div>
      <div className="home_row">
        <Product
          id="3"
          title=" American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
          price={999.99}
          rating={5}
          image={s3}

        />
        <Product
          id="4"
          title="Fur Jaden Brown Textured Leatherette Stylish & Spacious Weekender Duffle Bag for Travel
          4.3 out of 5 stars 5,952"
          price={599.99}
          rating={4}
          image={s4}

        />
        <Product
          id="5"
          title="SAFARI 15 Ltrs Denim Blue Casual/School/College Backpack (DAYPACKNEO15CBDNB)"
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
          title="ADISA 31 Ltrs Casual Backpack School College Bag Pack (Navy Blue)"
          price={199.99}
          rating={3}
          image={s7}
          
        />
        
        <Product
          id="8"
          title="DEIN KLEIDER Men's Nylon Messenger Bag"
          price={669.99}
          rating={4}
          image={s8}

        />
      </div>
      <div className="home_row">
        <Product
          id="9"
          title="Elegant Backpacks"
          price={899.99}
          rating={5}
          image={s9}

        />
        <Product
          id="10"
          title="ADISA 15.6 inch Laptop Backpack Office Bag College Travel Back Pack 32 Ltrs (z-Navy Blue)"
          price={52.99}
          rating={4}
          image={s10}

        />

          <Product
          id="11"
          title="Skybags Brat Black 46 Cms Casual Backpack"
          price={944.99}
          rating={5}
          image={s11}

          />
  
         
  
      </div>

      

    </div>
  )
}

export default Bag