import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({
  to,
  children,
  className,
  activeclassname,
  ...otherProps
}) => {
  return (
    <NavLink
      {...otherProps}
      to={to}
      className={className}
      activeclassname={activeclassname}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
