import { combineReducers } from 'redux'
import authSlice from "./slice/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer
})

export default rootReducer
