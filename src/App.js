import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='main'>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
