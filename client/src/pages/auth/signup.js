import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/main-layout";
import InputLayout from "../../components/input";
import FormLayout from "../../components/form";
import CustomLink from "../../components/custom-link";
import Button from "../../components/button";
import ViewPasswordEye from "../../components/viewPassword";

import { connect } from "react-redux";
import { setViewPassword } from "../../redux/action/viewPassword.action";
import { signUpUser } from "../../redux/action/user.action";
import ErrorMessage from "../../components/error-message";
import CustomClipLoader from "../../components/loader/clip-loader";

//react icons
import { SiTheregister } from "react-icons/si";

import { clearError } from "../../redux/action/user.action";

const SignUp = ({
  signUpUser,
  history,
  setViewPassword,
  auth: { isAuthenticated, loading },
  viewPassword: { status },
  error: { err },

  clearError,
}) => {
  const initialState = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    signUpUser(user, history);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    clearError();
  }, [isAuthenticated]);

  return (
    <MainLayout>
      <div className="w-1/2 mx-auto">
        <FormLayout onSubmit={submit}>
          <h1 className="text-4xl text-purple-600">Let's Go !</h1>
          <InputLayout
            name="name"
            type="text"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
            autoFocus
          />
          <InputLayout
            name="email"
            type="email"
            value={user.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
          <div className="flex items-center">
            <InputLayout
              name="password"
              type={status ? "text" : "password"}
              value={user.password}
              placeholder="Password "
              onChange={handleChange}
            />{" "}
            <ViewPasswordEye status={status} onClick={setViewPassword} />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-900">
            {" "}
            <CustomClipLoader loading={loading}>
              {" "}
              Sign Up <SiTheregister className="inline ml-2" />{" "}
            </CustomClipLoader>
          </Button>

          <ErrorMessage err={err} />

          <p className=" text-center my-4">
            Alrady have an account ?{" "}
            <CustomLink className="text-purple-600" to="/">
              Sign In
            </CustomLink>{" "}
          </p>
        </FormLayout>
      </div>
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
  signUpUser,
  clearError,
})(SignUp);
