import React from "react";

const WelcomBack = ({ auth: { user }, entry: { entries } }) => {
  return (
    <div className="mx-auto mt-12 flex flex-col justify-center items-center">
      <p className="text-center text-3xl">Hey there {user.name} !! </p>
      <p className="text-center text-2xl">
        You have {user.rank} {user.rank > 1 ? "entries" : "entry"}{" "}
      </p>
    </div>
  );
};

export default WelcomBack;
