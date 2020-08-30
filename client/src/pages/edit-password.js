import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main-layout";
import FormLayout from "../components/form";
import InputLayout from "../components/input";
import Button from "../components/button";
import ViewPasswordEye from "../components/viewPassword";

import { connect } from "react-redux";
import { setViewPassword } from "../redux/action/viewPassword.action";
import {
  editCurrentUserPassword,
  clearError,
} from "../redux/action/user.action";
import CustomClipLoader from "../components/loader/clip-loader";
import ErrorMessage from "../components/error-message";

const EditPasswordPage = ({
  setViewPassword,
  editCurrentUserPassword,
  viewPassword: { status },
  auth: { loading },
  error: { err },
  clearError,
}) => {
  const [user, setUser] = useState({ password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    clearError();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    editCurrentUserPassword(user);
  };
  return (
    <MainLayout>
      <div className="w-1/3 mx-auto">
        <FormLayout onSubmit={submit}>
          <p>Type in your new password</p>
          <div className="flex items-center">
            <InputLayout
              name="password"
              type={status ? "text" : "password"}
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <ViewPasswordEye status={status} onClick={setViewPassword} />
          </div>
          <p className="text-xs">
            *note you will sign in again with this new password
          </p>

          <ErrorMessage err={err} />
          <Button className="bg-purple-600 hover:bg-purple-900">
            <CustomClipLoader loading={loading}>
              Change Password
            </CustomClipLoader>
          </Button>
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
  editCurrentUserPassword,
  clearError,
})(EditPasswordPage);
