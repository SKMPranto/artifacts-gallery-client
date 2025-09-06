import React, { use } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router";

const MyPostedArtifacts = ({ artifactsCreatedByPromise }) => {
  const artifacts = use(artifactsCreatedByPromise);

  if (artifacts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
          You haven’t added any artifacts yet.
        </h2>
        <p className="text-gray-400 text-lg">
          Start contributing by adding your first artifact to the gallery!
        </p>
        <NavLink
          to="/"
          className="btn btn-soft btn-info md:text-lg font-bold rounded-2xl"
        >
          Go Home
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-gray-400 font-bold asimovian-regular text-center block mt-10">
        My Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 justify-items-center">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="card w-85 md:w-90 2xl:w-100 shadow-lg rounded-lg shadow-amber-500 border-amber-700 hover:shadow-2xl hover:scale-103 transition-transform duration-300"
          >
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
              <div className="join join-vertical lg:join-horizontal gap-x-4 mt-4">
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to={`/artifacts/${artifact._id}`}
                  className="btn join-item btn-soft btn-info md:text-lg rounded md:font-extrabold"
                >
                  Details
                </NavLink>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to={`/updateArtifacts/${artifact._id}`}
                  className="btn join-item btn-soft btn-warning md:text-lg rounded md:font-extrabold"
                >
                  Edit <FaEdit />
                </NavLink>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to={`/artifacts/${artifact._id}`}
                  className="btn join-item btn-soft btn-error md:text-lg rounded md:font-extrabold"
                >
                  Delete <MdDeleteForever />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedArtifacts;
