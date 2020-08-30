import React from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const CustomClipLoader = ({ loading, children, ...otherProps }) => {
  const override = css`
    display: block;
    margin: 8rem auto;
  `;
  return (
    <React.Fragment>
      {loading ? (
        <ClipLoader
          {...otherProps}
          css={override}
          size={20}
          color={"#fff"}
          loading={loading}
        />
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default CustomClipLoader;
