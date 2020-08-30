import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main-layout";
import FaceRecogImage from "../layouts/face-recog/face-recog-image";
import FaceRecogForm from "../layouts/face-recog/face-recog-form";
import WelcomBack from "../layouts/welcome/welcome";
import isEmpty from "is-empty";

import { connect } from "react-redux";
import { creatEntry } from "../redux/action/entries.action";

const DashboardPage = ({ auth, creatEntry, entry, error }) => {
  const [url, seturl] = useState({ imageUrl: "" });
  const [displayUrl, setDisplayUrl] = useState({ imageUrl: "" });
  const [box, setBox] = useState({ box: {} });

  const handleChange = (e) => {
    seturl({ ...url, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    creatEntry(url, url.imageUrl);
    setDisplayUrl({ ...displayUrl, imageUrl: url.imageUrl });
  };

  useEffect(() => {
    if (!isEmpty(entry?.clarifaiData)) {
      calculateFaceLoction(entry?.clarifaiData);
    }
  }, [entry?.clarifaiData]);

  //calculate the face with clarifai api
  const calculateFaceLoction = (clarifaiData) => {
    const clarifaiFace =
      clarifaiData?.outputs[0]?.data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image?.width);
    const height = Number(image?.height);
    return displayFaceBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    });
  };

  //display the Box for the face
  const displayFaceBox = (box) => {
    setBox({ ...box, box: box });
  };

  return (
    <MainLayout>
      <div className="w-full  flex items-top ">
        <div className="w-1/2 h-screen">
          <FaceRecogImage url={displayUrl} box={box.box} />
        </div>
        <div className="w-1/2">
          <WelcomBack auth={auth} entry={entry} />
          <FaceRecogForm
            url={url}
            submit={submit}
            handleChange={handleChange}
            entry={entry}
            error={error}
          />
        </div>
      </div>
    </MainLayout>
  );
};

const mapStateToTrops = (state) => ({
  auth: state.auth,
  error: state.error,
  entry: state.entry,
});

export default connect(mapStateToTrops, { creatEntry })(DashboardPage);
