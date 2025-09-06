import React, { useState } from "react";
import Banner from "./Banner";
import Title from "../Shared/Title";
import { useLoaderData } from "react-router";
import ArtifactsContainer from "../Components/ArtifactsContainer";

const Home = () => {
  Title("Home")
  const initialArtifacts = useLoaderData();
  const [artifacts, setArtifacts] = useState(initialArtifacts)
  return (
    <div>
      {/* Banner section */}
      <div className="relative bg-[url('https://i.ibb.co.com/KpDpZpZv/Screenshot-2025-09-02-174856.jpg')] bg-cover bg-center mt-5 md:pl-2 rounded-2xl">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        <div className="relative md:flex items-center text-white gap-17">
          <div className="md:w-[50%] text-center md:text-left mb-5 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl">
              Welcome to <br />{" "}
              <span className="text-4xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-[#c09e61] asimovian-regular">
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
      {/* Artifacts section */}
      <section>
        <ArtifactsContainer artifacts={artifacts}></ArtifactsContainer>
      </section>
    </div>
  );
};

export default Home;
