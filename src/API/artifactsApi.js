export const artifactsCreatedByPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/artifacts?email=${email}`, {
    headers: {
      authorization : `Bearer ${accessToken}`
    },
  }).then((res) => res.json());
};
