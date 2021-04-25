import { combineReducers } from "redux";
import authReducer from './auth'
import rateReducer from "./rate";
import adminReducer from './admin'
import dashboardReducer from "./dashboard";


const rootReducer = combineReducers({
    auth: authReducer,
    rate: rateReducer,
    admin: adminReducer,
    dashboard: dashboardReducer
  });
  
  export default rootReducer;
  