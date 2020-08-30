import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages";
import SignUp from "./pages/auth/signup";
import DashboardPage from "./pages/dashboard";
import EditProfilePage from "./pages/edit-profile";
import NotFoundPage from "./pages/notfound";
import EditPasswordPage from "./pages/edit-password";
import HistoryPage from "./pages/history";
import PrivateRoute from "./privateRoute/privateRoute";

import setAuthToken from "./utils/setAuthToken";
import { getCurrentUserProfile } from "./redux/action/user.action";
import store from "./redux/store/store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Set user and isAuthenticated
  store.dispatch(getCurrentUserProfile()); // Check for expired token
  // const currentTime = Date.now() / 1000; // to get in milliseconds
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());    // Redirect to login
  //   window.location.href = "./login";
  // }
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />{" "}
        <PrivateRoute exact path="/history" component={HistoryPage} />{" "}
        <PrivateRoute exact path="/edit" component={EditProfilePage} />
        <PrivateRoute exact path="/editpassword" component={EditPasswordPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
