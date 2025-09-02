import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <div className="relative bg-[url('https://i.ibb.co.com/KpDpZpZv/Screenshot-2025-09-02-174856.jpg')] bg-cover bg-center mt-5 pl-2 rounded-2xl">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        <div className="relative md:flex items-center text-white gap-17">
          <div className="md:w-[50%] text-center md:text-left mb-5 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-6xl">
              Welcome to <br />{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#c09e61] asimovian-regular">
                Artifacts Gallery
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Discover timeless treasures from history – explore rare artifacts,{" "}
              <br className="hidden 2xl:block" /> ancient tools, and cultural
              wonders all in one place
            </p>
          </div>
          <div className="md:w-[45%]">
            <Banner></Banner>
          </div>
        </div>
      </div>
      I am Home
    </div>
  );
};

export default Home;
