import { combineReducers } from "redux";

import viewPasswordReducer from "./reducer/viewPassword.reducer";
import userReducer from "./reducer/user.reducer";
import errorReducer from "./reducer/error.reducer";
import entriesReducer from "./reducer/entries.reducer";

const rootReducer = combineReducers({
  auth: userReducer,
  entry: entriesReducer,
  error: errorReducer,
  viewPassword: viewPasswordReducer,
});

export default rootReducer;
