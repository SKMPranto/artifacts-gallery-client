export const artifactsCreatedByPromise = (email) => {
  return fetch(`http://localhost:3000/artifacts?email=${email}`).then((res) =>
    res.json()
  );
};
