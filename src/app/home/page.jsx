import React from "react";
import allData from "../allData/page";

const Home = () => {
  const { home } = allData;
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          {home.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          {home.description}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {home.images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Wedding ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;