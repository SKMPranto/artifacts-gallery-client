export const artifactsCreatedByPromise = (email, accessToken) => {
  return fetch(
    `https://artifact-gallery-server.vercel.app/artifacts?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
