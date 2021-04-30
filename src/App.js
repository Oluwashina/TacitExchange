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
import FaqPage from './pages/Home/faq';

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

// user routes
import UserDashboard from './pages/Exchangers/Dashboard/dashboard';
import UserProfile from './pages/Exchangers/Profile/profile';
import UserNotifications from './pages/Exchangers/Notifications/notifications';
import UserTrade from './pages/Exchangers/Trade/trade';
import UserAccount from './pages/Exchangers/AccountDetails/accountDetails';
import UserTransactions from './pages/Exchangers/Transactions/transactions';
import UserTransactionDetails from './pages/Exchangers/Transactions/TransactionDetails';
import UpdateRates from './pages/Admin/Rates/UpdateRate';




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
              <Route path="/faq" component={FaqPage} />

              {/* Exchanger route */}
              <Route path="/user/dashboard" component={UserDashboard} />
              <Route path="/user/profile" component={UserProfile} />
              <Route path="/user/notifications" component={UserNotifications} />
              <Route path="/user/trade" component={UserTrade} />
              <Route path="/user/account" component={UserAccount} />
              <Route path="/user/transactions" component={UserTransactions} />
              <Route path="/user/transaction/:id" component={UserTransactionDetails} />


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
              <Route path="/admin/edit/rate/:id" component={UpdateRates} />


            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
