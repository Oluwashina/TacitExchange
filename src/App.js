import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home/home';

function App() {
  return (
    <>
      <div>
          <Router>
            <Switch>
              
              {/* home route */}
              <Route path="/" component={HomePage} />


            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
