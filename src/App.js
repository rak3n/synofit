import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/AboutUs';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Billing from './pages/Billing';
import Shipping from './pages/Shipping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <header/>
    </div>
  );
}

export default App;
