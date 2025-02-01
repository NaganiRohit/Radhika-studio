import React from "react";
import Home from "./home/page";
import Services from "./Services/page";
import Pricing from "./Pricing/page";
import Contact from "./contact/page";
import About from "./about/page";

const Page = () => {
  return (
    <div>
      <Home />
      <Services />
      <Pricing />
      <Contact />
      <About />
    </div>
  );
};

export default Page;