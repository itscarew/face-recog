import React from "react";
import Photo from "../assets/pexels-murat-esibatir-4355346.jpg";
import Photo2 from "../assets/pexels-martin-péchy-1292306.jpg";
import { FcCameraIdentification } from "react-icons/fc";
import { FaCameraRetro } from "react-icons/fa";

const IndexContent = () => {
  return (
    <React.Fragment>
      <div className="w-full  flex flex-row-reverse items-top  ">
        <div className="w-1/2 h-screen ">
          <div className=" w-full h-full">
            <img
              src={Photo2}
              alt="face-recog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 px-8 relative bg-black flex flex-col justify-center items-center text-white  text-center">
          <FcCameraIdentification size={"8rem"} />
          <h2 className="text-5xl my-4">Instant Detection</h2>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut.
          </div>
        </div>
      </div>
      <div className="w-full  flex  items-top ">
        <div className="w-1/2 h-screen ">
          <div className=" w-full h-full">
            <img
              src={Photo}
              alt="face-recog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 px-8 flex flex-col justify-center items-center text-center ">
          <FaCameraRetro fill={"#000"} size={"8rem"} />
          <h2 className="text-5xl my-4">Unreal Accuracy</h2>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexContent;
