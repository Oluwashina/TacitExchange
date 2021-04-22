import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// private routes
// import UserRoute from './components/PrivateRoutes/exchangerRoute'
// import AdminRoute from './components/PrivateRoutes/adminRoute'

import HomePage from './pages/Home/home';
import verifyEmail from './pages/VerifyEmail/verifyEmail';
import ResetPassword from './pages/ResetPassword/resetPassword'
import ContactPage from './pages/Home/contact';

// admin routes
import AdminLogin from './pages/Admin/Login/login'
import AdminForgotPassword from './pages/Admin/ForgotPassword/forgotPassword';
import AdminDashboard from './pages/Admin/Dashboard/dashboard';
import Admins from './pages/Admin/Admin/admin';
import adminProfile from './pages/Admin/Admin/adminProfile';
import AdminTrades from './pages/Admin/Trades/trades';
import AdminUsers from './pages/Admin/Users/users';
import AdminRates from './pages/Admin/Rates/rates';
import ViewAdmin from './pages/Admin/Admin/viewAdmin';
import UsersDetails from './pages/Admin/Users/usersbyId';
import AdminTradeDetails from './pages/Admin/Trades/TradeById';
import UserTradeDetails from './pages/Admin/Users/userTradebyId'
import AdminNewRates from './pages/Admin/Rates/NewRates';



function App() {
  return (
    <>
      <div>
          <Router>
            <Switch>
              
              {/* home route */}
              <Route exact path="/" component={HomePage} />
              <Route path="/verifyemail/:code" component={verifyEmail} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/contact" component={ContactPage} />


              {/* admin route */}
              <Route exact path="/admin" component={AdminLogin} />
              <Route path="/admin/forgotpassword" component={AdminForgotPassword} />
              <Route path="/admin/dashboard" component={AdminDashboard} />
              <Route path="/admin/admin" component={Admins} />
              <Route path="/admin/all" component={ViewAdmin} />
              <Route path="/admin/profile" component={adminProfile} />
              <Route path="/admin/trades" component={AdminTrades} />
              <Route path="/admin/trade/:id" component={AdminTradeDetails} />
              <Route path="/admin/users" component={AdminUsers} />
              <Route path="/admin/user/:id" component={UsersDetails} />
              <Route path="/admin/usertrade/:id" component={UserTradeDetails} />
              <Route path="/admin/rates" component={AdminRates} />
              <Route path="/admin/add/rates" component={AdminNewRates} />


            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
