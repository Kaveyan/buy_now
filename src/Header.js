import React from "react";
import "./Header.css"; // import the CSS file
import logo from "./mainlogo.png"; // import the image file
import { Link } from "react-router-dom";
import logo2 from "./cartlogo.png";
import { useStateValue } from "./StateProvider";
import SearchIcon from '@mui/icons-material/Search';
import { isAuthenticated } from "./Auth";


const handleSearch = (e) => {
  const searchTerm = e.target.value;
  const relatedWords = ["tv","TV","television", "sony tv", "samsung tv", "lg tv",
  "television","television", "sony", "samsung", "lg",
  "sony tv",
  "samsung tv",
  "lg tv",
  "smart tv",
  "led tv",
  "lcd tv",
  "plasma tv",
  "oled tv",
  "roku tv",
  "fire tv",
  "android tv",
  "apple tv",
  "chromecast",
  "flat screen tv",
  "projection tv",
  "crt tv",
  "portable tv",
  "built-in tv",
  "wall-mounted tv",
  "freestanding tv",
  "curved tv",
  "mobile",
  "headset", "shoes",
  "headphone",
  "slippers",
  "cycle",
  "watch",
  "smartwatch",
  "juicer",
  "nike",
  

  
];

  if (relatedWords.includes(searchTerm)) {
    if (searchTerm === "tv" || searchTerm === "sony tv" || searchTerm === "samsung tv" || searchTerm === "lg tv"){
    window.location.href = "http://localhost:3000/tv";

    }else if (searchTerm === "mobile") {
      window.location.href = "http://localhost:3000/mobile";
    }else if (searchTerm === "headset") {
      window.location.href = "http://localhost:3000/headset";
    }else if (searchTerm === "headphone") {
      window.location.href = "http://localhost:3000/headphone";
    }else if (searchTerm === "watch") {
      window.location.href = "http://localhost:3000/watch";
    }
    else if (searchTerm === "smartwatch") {
      window.location.href = "http://localhost:3000/smartwatch";
    }else if (searchTerm === "shoes" || searchTerm === "nike" ) {
      window.location.href = "http://localhost:3000/shoes";
    }
    else if (searchTerm === "slippers") {
      window.location.href = "http://localhost:3000/slippers";
    }else if (searchTerm === "cycle") {
      window.location.href = "http://localhost:3000/cycle";
    }
    else if (searchTerm === "juicer") {
      window.location.href = "http://localhost:3000/juicer";
    }else if (searchTerm === "bag") {
      window.location.href = "http://localhost:3000/bag";
    }

  }
};




function Header() {
  const userEmail = isAuthenticated() ? localStorage.getItem("userEmail") : null;

  const [{ basket },dispatch]=useStateValue();
  return (
    <nav className="header">
      
      <div className="header_nav">


        <Link to="/home">
        <img 
        className="header_logo" 
        src={logo} alt="Nike Logo" />
        </Link>

        <Link  to="/home" className="header_link">
          <div className="header_option">
            
            <span className="header_optionlinetwo"> Home </span>
          </div>
        </Link>
        
        <Link  to="/login" className="header_link">
          <div className="header_option">
            
            <span className="header_optionlinetwo">Sign In</span>
          </div>
        </Link>


        { /*<Link  to="/" className="header_link">
          <div className="header_option">
            
            <span className="header_optionlinetwo">Orders</span>
          </div>
        </Link>


        <Link  to="/" className="header_link">
          <div className="header_option">
            
            <span className="header_optionlinetwo">Prime</span>
          </div>
        </Link> */}
        <div className="header_search">
          <input
            type="text"
            className="header_searchinput"
            placeholder="Search"
            onChange={handleSearch}
            
          />
          <SearchIcon className="header_searchinputtwo" />
          
        </div>

        <Link  to="/checkout" className="header_link">
          <div className="header_optionBasket">
          {userEmail && <p>User: {userEmail}</p>}
            <br></br>
            <img className="header_logo2" src={logo2} alt="Nike Logo" />
            <span>
             {basket && basket.length}
            </span>  
             
          </div>

        </Link>

      </div>

    </nav>
  );
}

export default Header;
