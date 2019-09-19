import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Header from './Components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header leagueName="LFP"/>
    </div>
  );
}

export default App;
