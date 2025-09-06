import React, { useState, useEffect } from "react";
import Title from "../Shared/Title";
import { useLoaderData, useNavigate } from "react-router";

const ArtifactsDetails = () => {
  Title("Artifact Details");
  const { _id } = useLoaderData(); // Loader should just provide _id
  const Navigate = useNavigate();

  const userEmail = "currentUserEmail@example.com"; // Replace with auth user

  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Fetch artifact data including user's like status
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/artifacts/${_id}?email=${userEmail}`
        );
        const data = await response.json();
        setArtifact(data);
        setLiked(data.isLiked);
        setLikeCount(data.likes || 0);
      } catch (error) {
        console.error("Failed to fetch artifact:", error);
      }
    };
    fetchArtifact();
  }, [_id, userEmail]);

  // Toggle like
  const handleToggleLike = async () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount((prev) => (newLiked ? prev + 1 : prev - 1));

    try {
      const response = await fetch(
        `http://localhost:3000/artifacts/${_id}/like`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ liked: newLiked, email: userEmail }),
        }
      );

      if (!response.ok) throw new Error("Failed to update like");

      const data = await response.json();
      setLikeCount(data.likes); // sync with server count
    } catch (error) {
      console.error("Failed to update like:", error);
      setLiked((prev) => !prev); // rollback
      setLikeCount((prev) => (newLiked ? prev - 1 : prev + 1));
    }
  };

  if (!artifact) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-[#c09e61] font-bold text-center my-2 mt-10">
        {artifact.artifactName}
      </h1>

      <div className="hero bg-base-200 my-10 rounded-lg border border-amber-700 shadow-lg shadow-amber-500">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={artifact.artifactImage}
            alt={artifact.artifactName}
            className="lg:w-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {artifact.artifactName}
            </h1>
            <p className="py-6 text-gray-300 md:text-lg">
              {artifact.shortDescription}
            </p>

            <div className="badge badge-soft badge-info my-2 h-12 flex items-center justify-center text-left">
              <strong>Type: </strong> {artifact.artifactsType}
            </div>
            <div className="badge badge-soft badge-success my-2 h-12 flex items-center justify-center text-left">
              <strong>Created At: </strong> {artifact.createdAt}
            </div>
            <div className="badge badge-soft badge-info my-2 h-12 flex items-center justify-center text-left">
              <strong>Discovered At: </strong> {artifact.discoveredAt}
            </div>
            <div className="badge badge-soft badge-success my-2 h-12 flex items-center justify-center text-left">
              <strong>Discovered By: </strong> {artifact.discoveredBy}
            </div>
            <div className="badge badge-soft badge-info my-2 h-16 flex items-center justify-center text-left">
              <strong>Location: </strong> {artifact.presentLocation}
            </div>

            <span className="text-red-300">
              <strong>Historical Context: </strong>
            </span>
            <p className="py-2">{artifact.historicalContext}</p>

            <button
              onClick={handleToggleLike}
              className={`btn mt-3 ${
                liked
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-black"
              }`}
            >
              {liked ? "❤️ Liked" : "🤍 Like"} ({likeCount})
            </button>
          </div>
        </div>
      </div>

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
