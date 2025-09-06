import React, { use } from "react";
import { Link } from "react-router";

const MyPostedArtifacts = ({ artifactsCreatedByPromise }) => {
  const artifacts = use(artifactsCreatedByPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 justify-items-center">
      {artifacts.map((artifact) => (
        <div key={artifact._id} className="card w-85 md:w-90  2xl:w-100 shadow-lg rounded-lg shadow-amber-500 border-amber-700 hover:shadow-2xl hover:scale-103 transition-transform duration-300">
          <figure>
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="h-62 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{artifact.artifactName}</h2>
            <p className="text-gray-300">{artifact.shortDescription}</p>
            <div className="card-actions justify-center">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`/artifacts/${artifact._id}`}
                className="btn btn-outline btn-info w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostedArtifacts;
