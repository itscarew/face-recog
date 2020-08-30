import dotenv from "dotenv";
import axios from "axios";
import { getCurrentUserProfile } from "./user.action";
import Clarifai from "clarifai";
dotenv.config();

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

//set all articles for a user
export const setCurrentUserEntries = () => (dispatch) => {
  axios
    .get("/users/profile/entries")
    .then((entry) => {
      dispatch({
        type: "SET_CURRENT_USER_ENTRIES",
        payload: entry.data.data,
      });
      dispatch(entryLoaded());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(entryLoaded());
    });
};

//create/post an entry
export const creatEntry = (entry, url) => (dispatch) => {
  dispatch(entryLoading());
  axios
    .post(`/entries`, entry)
    .then((entry) => {
      dispatch({
        type: "CREATE_ENTRIES",
        payload: entry.data.data,
      });
      dispatch(clarifai(url));
      dispatch(clearError());
      dispatch(entryLoaded());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(entryLoaded());
    });
};

//increment user entry
export const incrementUserEntry = () => (dispatch) => {
  axios
    .put(`users/profile/entry`)
    .then((entry) => {
      dispatch(getCurrentUserProfile());
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    });
};

//clarifai
export const clarifai = (url) => (dispatch) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, url)
    .then((response) => {
      if (response) {
        dispatch({
          type: "ADD_CLARIFAI_RESPONSE",
          payload: response,
        });
        dispatch(incrementUserEntry());
      }
    })
    .catch((err) => {
      dispatch(
        getError({
          err: "Ooops something is wrong. check your url and try again",
        })
      );
    });
};

//delete an article
export const deleteEntry = (entryId) => (dispatch) => {
  axios
    .delete(`users/profile/entries/${entryId} `)
    .then(() => {
      dispatch({
        type: "DELETE_ENTRIES",
        payload: entryId,
      });
      dispatch(clearError());
      dispatch(entryLoaded());
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
      dispatch(entryLoaded());
    });
};

// entry loading
export const entryLoading = () => {
  return {
    type: "ENTRY_LOADING",
  };
};

// entry loaded
export const entryLoaded = () => {
  return {
    type: "ENTRY_LOADED",
  };
};

// clear Error
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
