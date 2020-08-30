import React from "react";
import FormLayout from "../../components/form";
import InputLayout from "../../components/input";
import Button from "../../components/button";
import CustomLink from "../../components/custom-link";
import ViewPasswordEye from "../../components/viewPassword";
import ErrorMessage from "../../components/error-message";
import CustomClipLoader from "../../components/loader/clip-loader";

//react icons
import { BsCamera } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";

const SignIn = ({
  user,
  status,
  setViewPassword,
  err,
  submit,
  handleChange,
  loading,
}) => {
  return (
    <div className="w-4/5 mx-auto mt-24">
      <FormLayout onSubmit={submit}>
        <h1 className="text-4xl text-center font-semibold text-purple-600">
          Face Recog <BsCamera className="inline ml-2 " size="2rem" />
        </h1>
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
          <CustomClipLoader loading={loading}>
            {" "}
            Sign In <FaSignInAlt className="inline ml-2" />{" "}
          </CustomClipLoader>
        </Button>

        <ErrorMessage err={err} />
        <p className=" text-center my-4">
          Don't have an account ?{" "}
          <CustomLink className="text-purple-600" to="/signup">
            {" "}
            Sign Up
          </CustomLink>{" "}
        </p>
      </FormLayout>
    </div>
  );
};

export default SignIn;
