import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop-page/shop.component'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
