import React, { useState, useEffect, use } from "react";
import Title from "../Shared/Title";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";

const LikedArtifacts = () => {
  Title("Liked Artifacts");

  const Navigate = useNavigate();
  const userEmail = use(AuthContext); // Replace with actual auth

  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/artifacts/liked?email=${userEmail}`
        );
        const data = await response.json();
        setLikedArtifacts(data);
      } catch (error) {
        console.error("Failed to fetch liked artifacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedArtifacts();
  }, [userEmail]);

  if (loading)
    return <p className="text-center mt-10">Loading liked artifacts...</p>;

  if (likedArtifacts.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">
          You haven't liked any artifacts yet!
        </h2>
        <p className="text-gray-400 mb-6">
          Browse all artifacts and click the ❤️ Like button to add them here.
        </p>
        <button
          onClick={() => Navigate("/all-artifacts")}
          className="btn btn-outline btn-wide bg-gradient-to-r from-[#c09e61] via-amber-600 to-amber-700 border-0 hover:from-amber-600 hover:via-amber-700 hover:to-[#c09e61]"
        >
          Browse Artifacts
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 px-5">
      <h1 className="text-3xl text-center font-bold text-[#c09e61] mb-8">
        Liked Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="card border border-amber-700 shadow-lg shadow-amber-500 rounded-lg overflow-hidden"
          >
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {artifact.artifactName}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {artifact.shortDescription}
              </p>
              <div className="flex justify-between items-center">
                <span className="badge badge-info">
                  {artifact.artifactsType}
                </span>
                <span className="text-red-500 font-semibold">
                  ❤️ {artifact.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
