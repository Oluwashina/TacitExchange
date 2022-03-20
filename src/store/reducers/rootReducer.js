import { combineReducers } from "redux";
import authReducer from './auth'
import rateReducer from "./rate";
import adminReducer from './admin'
import dashboardReducer from "./dashboard";
import notificationReducer from "./notifications";
import tradeReducer from "./trade";
import walletReducer from "./wallet";


const appReducer = combineReducers({
    auth: authReducer,
    rate: rateReducer,
    admin: adminReducer,
    dashboard: dashboardReducer,
    notification: notificationReducer,
    trade: tradeReducer,
    wallet: walletReducer
  });

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined
  }

    return appReducer(state, action)
  }


  
  export default rootReducer;
  