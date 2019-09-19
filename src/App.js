import React from 'react';
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";

import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage';

import Header from './Components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header leagueName="LFP"/>
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/news" component={NewsPage} />
        </BrowserRouter>

    </div>
  );
}

export default App;
