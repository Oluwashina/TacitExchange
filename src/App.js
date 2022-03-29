import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// private routes
import UserRoute from './components/PrivateRoutes/exchangerRoute'

import HomePage from './pages/Home/home';
import verifyEmail from './pages/VerifyEmail/verifyEmail';
import ResetPassword from './pages/ResetPassword/resetPassword'
import ContactPage from './pages/Home/contact';
import FaqPage from './pages/Home/faq';
import TermsPage from './pages/Home/terms';
import PrivacyPage from './pages/Home/privacy';
import NotFoundPage from './pages/404/NotFound';




// user routes
import UserDashboard from './pages/Exchangers/Dashboard/dashboard';
import UserProfile from './pages/Exchangers/Profile/profile';
import UserNotifications from './pages/Exchangers/Notifications/notifications';
import UserTrade from './pages/Exchangers/Trade/trade';
import UserAccount from './pages/Exchangers/AccountDetails/accountDetails';
import UserTransactions from './pages/Exchangers/Transactions/transactions';
import UserTransactionDetails from './pages/Exchangers/Transactions/TransactionDetails';
import UserWallet from './pages/Exchangers/Wallet/Wallet';
import UserWithdraw from './pages/Exchangers/Withdraw/Withdraw';
import AirtimePage from './pages/Exchangers/BillPayments/Airtime';
import BuyDataPage from './pages/Exchangers/BillPayments/BuyData';
import Electricity from './pages/Exchangers/BillPayments/Electricity';
import Cables from './pages/Exchangers/BillPayments/Cables';
import UtilitiesPage from './pages/Exchangers/BillPayments/Utilities';






function App() {
  return (
    <>
      <div>
          <BrowserRouter>
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
              <UserRoute path="/dashboard" component={UserDashboard} />
              <UserRoute path="/utilities/buyairtime" component={AirtimePage} />
              <UserRoute path="/utilities/buydata" component={BuyDataPage} />
              <UserRoute path="/utilities/buyelectricity" component={Electricity} />
              <UserRoute path="/utilities/tvsubscription" component={Cables} />
              <UserRoute path="/profile" component={UserProfile} />
              <Route exact path="/utilities" component={UtilitiesPage}  />
              <UserRoute path="/notifications" component={UserNotifications} />
              <UserRoute path="/start-trade" component={UserTrade} />
              <UserRoute path="/my-wallet" component={UserWallet} />
              <UserRoute path="/withdraw" component={UserWithdraw} />
              <UserRoute path="/account" component={UserAccount} />
              <UserRoute path="/trades" component={UserTransactions} />
              <UserRoute path="/trade/:id" component={UserTransactionDetails} />


         
              <Route path="*" component={NotFoundPage} />


            </Switch>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;
