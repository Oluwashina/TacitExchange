import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home/home';
import verifyEmail from './pages/VerifyEmail/verifyEmail';
import ResetPassword from './pages/ResetPassword/resetPassword'

// admin routes
import AdminLogin from './pages/Admin/Login/login'
import AdminForgotPassword from './pages/Admin/ForgotPassword/forgotPassword';


function App() {
  return (
    <>
      <div>
          <Router>
            <Switch>
              
              {/* home route */}
              <Route exact path="/" component={HomePage} />
              <Route path="/verifyemail" component={verifyEmail} />
              <Route path="/resetpassword" component={ResetPassword} />


              {/* admin route */}
              <Route exact path="/admin" component={AdminLogin} />
              <Route path="/admin/forgotpassword" component={AdminForgotPassword} />


            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
