import React from "react";
import CustomLink from "./custom-link";
import { connect } from "react-redux";

//react icons
import { MdDashboard, MdHistory } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsCamera } from "react-icons/bs";
import { SiTheregister } from "react-icons/si";

const Header = ({
  auth: {
    isAuthenticated,
    user: { name },
  },
}) => {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between my-2 mx-8">
        <li className="mr-3">
          <CustomLink
            className="text-3xl text-purple-600"
            to={isAuthenticated ? "/dashboard" : "/"}
          >
            Face Recog <BsCamera size={"2rem"} className="inline" />
          </CustomLink>
        </li>
        <div className="flex items-center">
          {!isAuthenticated ? (
            <li className="mr-3">
              <CustomLink
                className="inline-block border border-white rounded bg-purple-200  hover:border-purple-200 text-purple-500 text-center  py-1 px-3 w-32"
                to="/signup"
              >
                Sign Up <SiTheregister className="inline" />
              </CustomLink>
            </li>
          ) : (
            <React.Fragment>
              <li className="mr-3">
                <CustomLink
                  className="inline-block border border-white rounded bg-purple-200  hover:border-purple-200 text-purple-500 text-center  py-1 px-3 w-32"
                  to="/dashboard"
                >
                  Dashboard <MdDashboard className="inline" />
                </CustomLink>
              </li>
              <li className="mr-3">
                <CustomLink
                  className="inline-block border border-white rounded bg-purple-200  hover:border-purple-200 text-purple-500 text-center  py-1 px-3 w-32"
                  to="/history"
                >
                  History <MdHistory className="inline" />
                </CustomLink>
              </li>
              <li className="mr-3">
                <CustomLink
                  className="inline-block border border-white rounded bg-purple-200  hover:border-purple-200 text-purple-500 text-center  py-1 px-3 w-auto"
                  to="/edit"
                >
                  {name.split(" ")[0]} <FiUser className="inline" />
                </CustomLink>
              </li>
            </React.Fragment>
          )}
        </div>
      </ul>
    </nav>
  );
};

const mapStateToTrops = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToTrops)(Header);
