import React from "react";

const FormLayout = ({ children, onSubmit, className, ...otherProps }) => {
  return (
    <form
      {...otherProps}
      onSubmit={onSubmit}
      className={` className="bg-white px-8 pt-4 pb-4 mb-2 ${className}`}
    >
      {children}
    </form>
  );
};

export default FormLayout;
