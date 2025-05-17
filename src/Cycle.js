import React from 'react'
import "./mobile.css";
import Product from './MobileProduct';
import logo3 from './mainlogo3.png';
import "./Tv.css";
import s1 from './pngegg 10.png';
import s2 from './c (1).png';
import s3 from './c (2).png';
import s4 from './c (3).png';
import s5 from './c (7).png';
import s6 from './c (10).png';
import s7 from './c (6).png';
import s8 from './c (1).png';
import s9 from './c (4).png';
import s10 from './c (9).png';
import s11 from './c (5).png';


function Cycle() {
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
                title="Leader Scout MTB 26T Mountain Bicycle/Bike Without Gear Single Speed for Men"
                price={499.99}
                rating={5}
                image={s1}
                
    
              />
             
           
            
              <Product
                className="element2"
                id="2"
                title="Leader Gladiator 26t Mountain Bike Multispeed"
                price={339.99}
                rating={4}
                image={s2}
    
              />
            
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="Urban Terrain UT7003S26 Denver City Bike with Complete Accessories"
              price={999.99}
              rating={5}
              image={s3}
    
            />
            <Product
              id="4"
              title="Leader Scout MTB 26T Mountain Bicycle/Bike Without Gear Single Speed for Men"
              price={599.99}
              rating={4}
              image={s4}
    
            />
            <Product
              id="5"
              title="Hero sprint 27T Road Bike for Unisex , 19 Inch Stee"
              price={109.99}
              rating={5}
              image={s5}
    
            />
            <Product
              id="6"
              title="VECTOR 91 Men's TopGun 26T Single Speed,"
              price={200.99}
              rating={5}
              image={s6}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="Sponsored Ad - Z Group Cycle Shimano Type Gear Shifter Adjustable 21 Gears Front Dual  "
              price={199.99}
              rating={3}
              image={s7}
              
            />
            
            <Product
              id="8"
              title="Hero Mig Men's 26 Inches, 18.0 Inches Frame Single"
              price={669.99}
              rating={4}
              image={s8}
    
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="
              plus Cycle for Kids 2 to 4 Years Old with Support Wheels, Ideal for Both Boys & Girls, Hi-Ten Steel Frame, Strong All...
              "
              price={899.99}
              rating={5}
              image={s9}
    
            />
            <Product
              id="10"
              title="Vaux Pearl Lady Cycle for Kids 16 inch with Sidewheels"
              price={52.99}
              rating={4}
              image={s10}
    
            />
    
              <Product
              id="11"
              title="Vaux Eco-Sus Kids Cycle for Boys with Suspension for Age"
              price={944.99}
              rating={5}
              image={s11}
    
              />
      
      
          </div>
    
        </div>
      )
}

export default Cycle