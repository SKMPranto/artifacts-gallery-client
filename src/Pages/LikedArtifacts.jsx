import React, { useState, useEffect, use } from "react";
import Title from "../Shared/Title";
import { useNavigate, NavLink, Link } from "react-router";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";
import Spinner from "../Shared/Spinner";

const LikedArtifacts = () => {
  Title("Liked Artifacts");
  const { user } = use(AuthContext);
  const Navigate = useNavigate();

  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        if (!user?.email) return setLikedArtifacts([]);
        const response = await fetch(
          `https://artifact-gallery-server.vercel.app/artifacts/liked?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setLikedArtifacts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch liked artifacts:", error);
        setLikedArtifacts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedArtifacts();
  }, [user?.email, user.accessToken]);

  if (loading) return <Spinner></Spinner>;

  if (!likedArtifacts.length) {
    return (
      <div className="text-center my-10">
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
    <div className="my-10">
      <h1 className="text-3xl text-center font-bold text-[#c09e61] mb-8">
        Liked Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedArtifacts.map((artifact) => (
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

              {/* Like count badge */}
              <div className="badge badge-info text-white font-semibold">
                ❤️ {artifact.likes || 0} Likes
              </div>

              <div className="card-actions justify-center mt-3">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
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
    </div>
  );
};

export default LikedArtifacts;
