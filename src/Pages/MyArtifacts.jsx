import React, { useEffect, useState, useContext, Suspense } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";
import MyPostedArtifacts from "../Components/MyPostedArtifacts";
import { artifactsCreatedByPromise } from "../API/artifactsApi";
import Spinner from "../Shared/Spinner";

const MyArtifacts = () => {
  Title("My Artifacts");

  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      artifactsCreatedByPromise(user.email)
        .then((data) => setMyArtifacts(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <Spinner />;

  return (
    <div>
      <Suspense fallback={<Spinner></Spinner>}>
        <MyPostedArtifacts
          artifacts={myArtifacts}
          setArtifacts={setMyArtifacts}
        ></MyPostedArtifacts>
      </Suspense>
    </div>
  );
};

export default MyArtifacts;
