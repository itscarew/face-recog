import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUserEntries } from "./entries.action";

// SignUp User
export const signUpUser = (newUser, history) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .post("/users/signup", newUser)
    .then((res) => {
      history.push("/");
      dispatch(setUserLoaded());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(setUserLoaded());
    });
};

// SignIn User - get user token
export const signInUser = (user, history) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .post("/users/signin", user)
    .then((res) => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Set current user Profile
      dispatch(getCurrentUserProfile());
      history.push("/dashboard");
      dispatch(setUserLoaded());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(setUserLoaded());
    });
};

//get current user profile || MAIN FOR USER
export const getCurrentUserProfile = () => (dispatch) => {
  axios
    .get("/users/profile")
    .then((res) => {
      dispatch(setCurrentUser(res.data.data));
      dispatch(setCurrentUserEntries());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(setUserLoaded());
    });
};

//edit current user deatails
export const editCurrentUser = (user) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .patch("/users/profile", user)
    .then((res) => {
      //set current user profile
      dispatch(getCurrentUserProfile());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    })
    .finally(() => {
      dispatch(setUserLoaded());
    });
};

//edit current user password
export const editCurrentUserPassword = (userPassword) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .patch("/users/profile/password", userPassword)
    .then((res) => {
      dispatch(logoutUser());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    })
    .finally(() => {
      dispatch(setUserLoaded());
    });
};

// Remove User
export const deleteCurrentUser = () => (dispatch) => {
  axios
    .delete("/users/profile")
    .then(() => {
      dispatch(logoutUser());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: "USER_LOADING",
  };
};

// User loaded
export const setUserLoaded = () => {
  return {
    type: "USER_LOADED",
  };
};

// Clear Error
export const clearError = () => {
  return {
    type: "CLEAR_ERRORS",
  };
};

//get Error
export const getError = (error) => {
  return {
    type: "GET_ERRORS",
    payload: error,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch(clearError());
};
