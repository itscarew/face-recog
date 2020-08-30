import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main-layout";
import EditDetails from "../layouts/edit-profile/edit-details";
import DeleteAccount from "../layouts/edit-profile/delete-profile";
import CustomLink from "../components/custom-link";
import { AiOutlineArrowRight } from "react-icons/ai";

import { connect } from "react-redux";
import {
  logoutUser,
  editCurrentUser,
  deleteCurrentUser,
  clearError,
} from "../redux/action/user.action";

const EditProfilePage = ({
  error,
  history,
  auth: {
    user: { name, email },
    loading,
  },
  logoutUser,
  editCurrentUser,
  deleteCurrentUser,
  clearError,
}) => {
  const initialState = { name: "", email: "" };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    editCurrentUser(user);
  };

  useEffect(() => {
    setUser({ ...user, name, email });
    clearError();
  }, []);

  return (
    <MainLayout>
      <div className="w-1/3 mx-auto">
        <EditDetails
          user={user}
          logoutUser={logoutUser}
          handleChange={handleChange}
          submit={submit}
          history={history}
          error={error}
          loading={loading}
        />
        <CustomLink
          className="mx-8 mt-3 mb-4 block text-purple-600 text-xl"
          to="/editpassword"
        >
          Change Password <AiOutlineArrowRight className="inline" />
        </CustomLink>
        <DeleteAccount deleteCurrentUser={deleteCurrentUser} />
      </div>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, {
  logoutUser,
  editCurrentUser,
  deleteCurrentUser,
  clearError,
})(EditProfilePage);
