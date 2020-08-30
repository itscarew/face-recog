import React from "react";

const InputLayout = ({ onChange, value, className, ...otherProps }) => {
  return (
    <input
      {...otherProps}
      onChange={onChange}
      value={value}
      className={`appearance-none  outline-none border-b border-gray-700  w-full py-2 text-black tracking-wide placeholder-black leading-tight text-3xl my-2 ${className}`}
    />
  );
};

export default InputLayout;
