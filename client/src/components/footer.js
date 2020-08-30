import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-12 w-full flex justify-center items-center  mx-auto bg-gray-900">
      <p className="text-center text-red-600 ">
        &copy; {new Date().getFullYear()} Olaonipekun Carew. All rights
        reserved.
      </p>

      <a className="ml-2" href="https://twitter.com/itscarew" target="_/blank">
        <AiOutlineTwitter size="1.2rem" fill="#fff" />{" "}
      </a>
      <a
        className="ml-2"
        href="http://olaonipekuncarew.netlify.app/"
        target="_/blank"
      >
        <FaGlobeAfrica size="1.2rem" fill="#fff" />{" "}
      </a>
    </div>
  );
};

export default Footer;
