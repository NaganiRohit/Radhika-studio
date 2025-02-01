import React from "react";
import allData from "../../allData/page";

const Services = () => {
  const { services } = allData;
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        {services.title}
      </h1>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.list.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {service}
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;