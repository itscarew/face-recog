import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Particles from "react-particles-js";
import { particles } from "../components/particles/particles";

const MainLayout = ({ children, index }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Particles className="particles" params={particles} />
      <div>
        <Header />
        <div className={`w-full ${index ? "" : "px-8 py-6"} `}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
