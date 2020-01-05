import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div className="">
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
