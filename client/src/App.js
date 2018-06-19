import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./HomePage/Home.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    );
  }
}

export default App;
