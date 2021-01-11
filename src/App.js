import './App.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shoppage/shop.component'

import Homepage from "./pages/homepage/homepage.component"
 
function App() {
  return (
    <div>
      <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
