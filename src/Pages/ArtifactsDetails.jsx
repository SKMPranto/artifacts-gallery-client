import React from "react";
import Title from "../Shared/Title";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";

const ArtifactsDetails = () => {
  Title("Artifact Details");
  const {
    artifactName,
    artifactImage,
    shortDescription,
    artifactsType,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    historicalContext,
  } = useLoaderData();
  const location = useLocation();
  const Navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-[#c09e61] font-bold text-center block  my-2 mt-10">
        {artifactName}
      </h1>
      {/* Details Card */}
      <div className="hero  bg-base-200 my-10 rounded-lg border border-amber-700 shadow-lg shadow-amber-500">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={artifactImage}
            className="lg:w-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{artifactName}</h1>
            <p className="py-6 text-gray-300 md:text-lg">{shortDescription}</p>
            <div className="badge badge-soft badge-info my-2 h-12 flex items-center justify-center text-left">
              <p>
                <span>
                  <strong>Artifacts Type : </strong>{" "}
                </span>{" "}
                {artifactsType}
              </p>
            </div>
            <div className="badge badge-soft badge-success my-2 h-12 flex items-center justify-center text-left">
              <p>
                <span>
                  <strong>Created At : </strong>{" "}
                </span>{" "}
                {createdAt}
              </p>
            </div>
            <div className="badge badge-soft badge-info my-2 h-12 flex items-center justify-center text-left">
              <p>
                <span>
                  <strong>Discovered At : </strong>{" "}
                </span>{" "}
                {discoveredAt}
              </p>
            </div>
            <div className="badge badge-soft badge-success my-2 h-12 flex items-center justify-center text-left">
              <p>
                <span>
                  <strong>Discovered By : </strong>{" "}
                </span>{" "}
                {discoveredBy}
              </p>
            </div>
            <div className="badge badge-soft badge-info my-2 h-16 flex items-center justify-center text-left">
              <p>
                <span>
                  <strong>Present Location : </strong>{" "}
                </span>{" "}
                {presentLocation}
              </p>
            </div>
            <span className="text-red-300">
              <strong>Historical Context : </strong>
            </span>
            <p className="py-2">{historicalContext}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* Back to home Button */}
      <button
        onClick={() => {
          Navigate("/all-artifacts");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="btn btn-outline btn-wide mt-10 text-lg 2xl:text-2xl bg-gradient-to-r from-[#c09e61] via-amber-600 to-amber-700 border-0 hover:from-amber-600 hover:via-amber-700 hover:to-[#c09e61] mx-auto block"
      >
        All Artifacts
      </button>
    </div>
  );
};

export default ArtifactsDetails;
