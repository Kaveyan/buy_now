import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Tv from "./Tv";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import Mobile from "./Mobile";
import Headset from "./Headset";
import Headphone from "./Headphone";
import Watch from "./Watch";
import Slippers from "./Slippers";
import Shoes from "./Shoes";
import Cycle from "./Cycle";
import Bag from "./Bag";
import Smartwatch from "./Smartwatch";
import Juicer from "./juicer";

const promise = loadStripe('pk_test_51NCkOySIrnnMmFSonQGYKxhFeRWIgQYxJ5rlxtPB6OnQEig1jkEN2LnVnB6RRTGzzTohZtXRDovSnIJFpnLdVFOR00LkPBE9IN');

function App() {
  {/*const [{},dispatch] = useStateValue();
  useEffect(()=>{

    auth.onAuthstateChange(authUser => {
      console.log("THE USER IS .>>>",authUser);
    })
  })*/}
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
        <Route path="/Checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/headset" element={<Headset />} />
          <Route path="/headphone" element={<Headphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/slippers" element={<Slippers />} />
          <Route path="/cycle" element={<Cycle />} />
          <Route path="/juicer" element={<Juicer />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/smartwatch" element={<Smartwatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;  


