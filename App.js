import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './components/Style.css';
import Destination from './components/Destination';
import im3 from './images/im3.jpg'
import Gallery from './components/Gallery'
import Banner from './components/Banner'
import Review from './components/Review';
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>

      <Header/>
      <h2 className="mytitle">Featured Distination</h2>
      <Destination/>
      <Gallery/>
      <Banner/>
      <h2 className="mytitle">User Review</h2>
      <Review/>
      <Footer></Footer>
    </Router>
  );
}

export default App;
