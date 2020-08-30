import React from "react";

const Button = ({ children, className, onClick, signout, ...otherProps }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      {...otherProps}
      className={`${
        signout ? `` : `w-full`
      }  flex items-center justify-center  my-4 text-white py-6 px-4 h-10 rounded-full focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
