import React from "react";

const ErrorMessage = ({ err }) => {
  return (
    <React.Fragment>
      {err ? (
        <div className="text-center mt-4 text-red-500 text-sm"> {err} </div>
      ) : null}
    </React.Fragment>
  );
};

export default ErrorMessage;
