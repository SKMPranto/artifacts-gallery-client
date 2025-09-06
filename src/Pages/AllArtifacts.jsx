import React, { useState } from "react";
import Title from "../Shared/Title";
import { Link, useLoaderData } from "react-router";

const AllArtifacts = () => {
  const initialArtifacts = useLoaderData();
  const Artifacts = initialArtifacts;
  const [artifacts, setArtifacts] = useState(Artifacts);
  Title("All Artifacts");
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Short Description</th>
            <th>Present Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {artifacts.map((artifact,index)=>(
                        <tr key={artifact._id}>
                <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={artifact.artifactImage}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{artifact.artifactName}</div>
                  </div>
                </div>
              </td>
              <td>
                {artifact.shortDescription}
              </td>
              <td>{artifact.presentLocation}</td>
              <th>
                <Link to={`/artifacts/${artifact._id}`} className="btn btn-soft btn-info">details</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArtifacts;
