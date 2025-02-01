import React from "react";
import allData from "../../allData/page";

const About = () => {
  const { about } = allData;
  return (
    <div className="bg-black min-h-auto py-28 flex flex-col justify-center items-center text-white p-8">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{about.title}</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {about.story}
        </p>
      </div>
    </div>
  );
};

export default About;