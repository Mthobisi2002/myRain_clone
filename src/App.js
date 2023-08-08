import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FourGmobile from './pages/4Gmobile';
import Myrain from './pages/about-my-rain';
import Support from './pages/support';
import SignIn from './pages/sign-in';
import Cart from './pages/cart';
import OurNetwork from './pages/our-network';
import Legal from './pages/legal';
import Nvidia from './pages/nvidia';
import Register from './pages/register';
import React, { useState } from 'react';

function App() {

  const [style, setStyle] = useState({ display: "block" });
  const [style2, setStyle2] = useState({ display: "none" });
  const [numb, setNumb] = useState("0");

  return (
    <div className="App">
      <Router>
        <Navbar numb={numb} />
        <Routes>
          <Route path="/" element={<Home setStyle={setStyle} setStyle2={setStyle2} setNumb={setNumb} />}></Route>
        </Routes>
        <Routes>
          <Route path="/4Gmobile" element={<FourGmobile />}></Route>
        </Routes>
        <Routes>
          <Route path="/about-my-rain" element={<Myrain />}></Route>
        </Routes>
        <Routes>
          <Route path="/support" element={<Support />}></Route>
        </Routes>
        <Routes>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart style={style} style2={style2} setStyle={setStyle} setStyle2={setStyle2} setNumb={setNumb} />}></Route>
        </Routes>
        <Routes>
          <Route path="/our-network" element={<OurNetwork />}></Route>
        </Routes>
        <Routes>
          <Route path="/legal" element={<Legal />}></Route>
        </Routes>
        <Routes>
          <Route path="/nvidia" element={<Nvidia />}></Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
