import React from "react";
import FormLayout from "../../components/form";
import Button from "../../components/button";
import InputLayout from "../../components/input";
import ErrorMessage from "../../components/error-message";
import CustomClipLoader from "../../components/loader/clip-loader";

const EditDetails = ({
  user: { name, email },
  logoutUser,
  handleChange,
  submit,
  history,
  error: { err },
  loading,
}) => {
  return (
    <div>
      <FormLayout onSubmit={submit}>
        <InputLayout
          name="name"
          type="name"
          value={name}
          placeholder="New Name"
          onChange={handleChange}
          required
          autoFocus
        />
        <InputLayout
          name="email"
          type="email"
          value={email}
          placeholder="New Email"
          onChange={handleChange}
          required
        />

        <div className="flex">
          <Button className="bg-purple-600 hover:bg-purple-900 mr-2">
            <CustomClipLoader loading={loading}>Save</CustomClipLoader>
          </Button>
          <Button
            className="bg-gray-600 ml-2"
            onClick={() => history.push("/dashboard")}
          >
            Discard{" "}
          </Button>
        </div>
        <ErrorMessage err={err} />
        <div className="flex justify-end">
          {" "}
          <Button signout className="bg-gray-900 w-1/2  " onClick={logoutUser}>
            Sign Out
          </Button>
        </div>
      </FormLayout>
    </div>
  );
};

export default EditDetails;
