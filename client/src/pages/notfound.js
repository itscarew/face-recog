import React from "react";
import MainLayout from "../layouts/main-layout";
import CustomLink from "../components/custom-link";
import Image from "../assets/404.jpg";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div>
        <h2 className="text-center text-4xl font-semibold">
          This Page you are looking for does not exist!!
        </h2>
        <div className="w-1/2 mx-auto">
          <img src={Image} className="w-full h-fulld" alt="notfound" />
        </div>
        <div className="flex items-center justify-center">
          <CustomLink
            to="/"
            className="inline-flex  items-center justify-center  my-4 text-white py-6 px-4 h-10 rounded-full focus:outline-none focus:shadow-outline bg-purple-600 hover:bg-purple-900 "
          >
            Go Back To Home
          </CustomLink>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
