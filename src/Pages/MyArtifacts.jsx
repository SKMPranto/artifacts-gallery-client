import React, { Suspense, use } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";
import MyPostedArtifacts from "../Components/MyPostedArtifacts";
import { artifactsCreatedByPromise } from "../API/artifactsApi";
import Spinner from "../Shared/Spinner";

const MyArtifacts = () => {
  Title("My Artifacts");
  const { user } = use(AuthContext);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-gray-400 font-bold asimovian-regular text-center block mt-10">
        My Artifacts
      </h1>
      <Suspense fallback={<Spinner></Spinner>}>
        <MyPostedArtifacts
          artifactsCreatedByPromise={artifactsCreatedByPromise(user.email)}
        ></MyPostedArtifacts>
      </Suspense>
    </div>
  );
};

export default MyArtifacts;
