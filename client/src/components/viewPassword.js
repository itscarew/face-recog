import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ViewPasswordEye = ({ status, onClick, ...otherProps }) => {
  return (
    <div
      className="cursor-pointer"
      size={"2rem"}
      style={{ marginLeft: "-2em", zIndex: 2 }}
      onClick={onClick}
      {...otherProps}
    >
      {status ? <AiFillEye size="2rem" /> : <AiFillEyeInvisible size="2rem" />}
    </div>
  );
};

export default ViewPasswordEye;
