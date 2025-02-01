import React from "react";
import allData from "../allData/page";

const Pricing = () => {
  const { pricing } = allData;
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        {pricing.title}
      </h1>

      {/* Pricing Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {pricing.packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {pkg.name}
            </h2>
            <p className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;