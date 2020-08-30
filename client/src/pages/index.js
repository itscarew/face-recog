import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main-layout";
import SignIn from "./auth/signin";
import Photo from "../assets/pexels-jorge-fakhouri-filho-2531093.jpg";

import { connect } from "react-redux";
import { setViewPassword } from "../redux/action/viewPassword.action";
import { signInUser, clearError } from "../redux/action/user.action";
import IndexContent from "../components/index-contents";

const IndexPage = ({
  viewPassword: { status },
  signInUser,
  auth: { isAuthenticated, loading },
  setViewPassword,
  history,
  error: { err },
  clearError,
}) => {
  const initialState = { email: "", password: "" };

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    signInUser(user, history);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    clearError();
  }, [isAuthenticated]);

  return (
    <MainLayout index>
      <div className="w-full  flex items-top ">
        <div className="w-1/2 h-screen ">
          <div className=" w-full h-full">
            <img
              src={Photo}
              alt="face-recog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2">
          <SignIn
            status={status}
            setViewPassword={setViewPassword}
            err={err}
            user={user}
            submit={submit}
            handleChange={handleChange}
            loading={loading}
          />
        </div>
      </div>
      <IndexContent />
    </MainLayout>
  );
};
const mapStateToTrops = (state) => ({
  auth: state.auth,
  viewPassword: state.viewPassword,
  error: state.error,
});

export default connect(mapStateToTrops, {
  setViewPassword,
  signInUser,
  clearError,
})(IndexPage);
