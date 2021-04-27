import { combineReducers } from "redux";
import authReducer from './auth'
import rateReducer from "./rate";
import adminReducer from './admin'
import dashboardReducer from "./dashboard";
import notificationReducer from "./notifications";
import tradeReducer from "./trade";


const rootReducer = combineReducers({
    auth: authReducer,
    rate: rateReducer,
    admin: adminReducer,
    dashboard: dashboardReducer,
    notification: notificationReducer,
    trade: tradeReducer
  });
  
  export default rootReducer;
  