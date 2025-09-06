import React, { useEffect, useState } from "react";
import ArtifactsCard from "./ArtifactsCard";
import { Link } from "react-router";

const ArtifactsContainer = ({ artifacts }) => {
  const [displayArtifacts, setDisplayArtifacts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (artifacts.length > 6 && !showAll) {
      setDisplayArtifacts(artifacts.slice(0, 6));
    } else {
      setDisplayArtifacts(artifacts);
    }
  }, [artifacts, showAll]);

  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-gray-400 font-bold asimovian-regular text-center block mt-10">
          Explore Our Artifacts Collection
      </h1>
      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 justify-items-center">
        {displayArtifacts.map((artifact) => (
          <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>
        ))}
      </div>
      {/* Show All Artifacts Button */}
      <div className="flex justify-center mb-10">
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/all-artifacts" className="btn btn-primary">
          Show All Artifacts
        </Link>
      </div>
    </div>
  );
};

export default ArtifactsContainer;
