import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// private routes
import UserRoute from './components/PrivateRoutes/exchangerRoute'
import AdminRoute from './components/PrivateRoutes/adminRoute'

import HomePage from './pages/Home/home';
import verifyEmail from './pages/VerifyEmail/verifyEmail';
import ResetPassword from './pages/ResetPassword/resetPassword'
import ContactPage from './pages/Home/contact';
import FaqPage from './pages/Home/faq';
import TermsPage from './pages/Home/terms';
import PrivacyPage from './pages/Home/privacy';
import NotFoundPage from './pages/404/NotFound';


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
          <BrowserRouter basename="/TacitExchange">
            <Switch>
              
              {/* home route */}
              <Route exact path="/" component={HomePage} />
              <Route path="/verifyemail/:code" component={verifyEmail} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/faq" component={FaqPage} />
              <Route path="/terms" component={TermsPage} />
              <Route path="/privacypolicy" component={PrivacyPage} />

              {/* Exchanger route */}
              <UserRoute path="/user/dashboard" component={UserDashboard} />
              <UserRoute path="/user/profile" component={UserProfile} />
              <UserRoute path="/user/notifications" component={UserNotifications} />
              <UserRoute path="/user/trade" component={UserTrade} />
              <UserRoute path="/user/account" component={UserAccount} />
              <UserRoute path="/user/transactions" component={UserTransactions} />
              <UserRoute path="/user/transaction/:id" component={UserTransactionDetails} />


              {/* admin route */}
              <Route exact path="/admin" component={AdminLogin} />
              <Route path="/admin/forgotpassword" component={AdminForgotPassword} />
              <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
              <AdminRoute path="/admin/admin" component={Admins} />
              <AdminRoute path="/admin/all" component={ViewAdmin} />
              <AdminRoute path="/admin/profile" component={adminProfile} />
              <AdminRoute path="/admin/trades" component={AdminTrades} />
              <AdminRoute path="/admin/trade/:id" component={AdminTradeDetails} />
              <AdminRoute path="/admin/users" component={AdminUsers} />
              <AdminRoute path="/admin/user/:id" component={UsersDetails} />
              <AdminRoute path="/admin/usertrade/:id" component={UserTradeDetails} />
              <AdminRoute path="/admin/rates" component={AdminRates} />
              <AdminRoute path="/admin/add/rates" component={AdminNewRates} />
              <AdminRoute path="/admin/edit/rate/:id" component={UpdateRates} />
              <Route path="*" component={NotFoundPage} />


            </Switch>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;
