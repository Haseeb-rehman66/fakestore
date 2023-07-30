import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './container/Header';
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/ProductListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header/>
        <Routes> 
        <Route path="/" exact element={<ProductListing/>} />
        <Route path="/product/:productId" exact element={<ProductDetails/>} />
        <Route>404 Not Found</Route>
        </Routes>
        </Router>
    
      </div>
    );
  }
};

export default App;
