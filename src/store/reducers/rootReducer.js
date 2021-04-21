import { combineReducers } from "redux";
import authReducer from './auth'
import rateReducer from "./rate";
import adminReducer from './admin'

const rootReducer = combineReducers({
    auth: authReducer,
    rate: rateReducer,
    admin: adminReducer
  });
  
  export default rootReducer;
  