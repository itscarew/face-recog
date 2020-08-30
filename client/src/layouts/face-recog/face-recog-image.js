import React from "react";
import "./face-recog.css";
import isEmpty from "is-empty";
import { ImImage } from "react-icons/im";

const FaceRecogImage = ({ url: { imageUrl }, box }) => {
  return (
    <div className=" w-full h-full">
      {isEmpty(imageUrl) ? (
        <div className=" flex flex-col items-center justify-center w-full h-full">
          <div
            style={{ marginTop: "-18rem" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl text-center mb-4">
              Your Image will appear here
            </h2>
            <ImImage fill={"#000"} size={"12rem"} />
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full">
          <img
            id="inputImage"
            src={imageUrl}
            alt={imageUrl}
            className="w-full h-full object-contain"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FaceRecogImage;
