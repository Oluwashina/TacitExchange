import { combineReducers } from "redux";
import authReducer from './auth'
import rateReducer from "./rate";

const rootReducer = combineReducers({
    auth: authReducer,
    rate: rateReducer
  });
  
  export default rootReducer;
  