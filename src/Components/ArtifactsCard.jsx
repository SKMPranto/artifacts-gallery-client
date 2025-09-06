import React from "react";
import { Link } from "react-router";

const ArtifactsCard = ({ artifact }) => {
  const { artifactImage, artifactName, shortDescription, _id } = artifact;
  return (
    <div className="card w-85 md:w-90  2xl:w-100 shadow-lg rounded-lg shadow-amber-500 border-amber-700 hover:shadow-2xl hover:scale-103 transition-transform duration-300">
      <figure>
        <img
          src={artifactImage}
          alt={artifactName}
          className="h-62 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifactName}</h2>
        <p className="text-gray-300">{shortDescription}</p>
        <div className="badge badge-soft badge-info">
          Like Count : {artifact.likeCount}
        </div>
        <div className="card-actions justify-center">
          <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={`/artifacts/${_id}`} className="btn btn-outline btn-info w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
