import React from "react";
import FormLayout from "../../components/form";
import InputLayout from "../../components/input";
import Button from "../../components/button";

import CustomClipLoader from "../../components/loader/clip-loader";
import ErrorMessage from "../../components/error-message";

//react icons
import { BsCamera } from "react-icons/bs";

const FaceRecogForm = ({
  url: { imageUrl },
  handleChange,
  submit,
  entry: { loading },
  error: { err },
}) => {
  return (
    <div className="w-4/5 mx-auto mt-12">
      <FormLayout onSubmit={submit}>
        <h4 className="text-2xl text-center mb-4">
          Ok now detect faces in your photos.
          <BsCamera className="inline ml-2 " size="2rem" />
        </h4>

        <InputLayout
          name="imageUrl"
          value={imageUrl}
          type="text"
          onChange={handleChange}
          placeholder="Paste the image url here"
          required
          autoFocus
        />

        <ErrorMessage err={err} />

        <Button className="bg-purple-600 hover:bg-purple-900">
          <CustomClipLoader loading={loading}>Detect </CustomClipLoader>{" "}
        </Button>
      </FormLayout>
    </div>
  );
};

export default FaceRecogForm;
