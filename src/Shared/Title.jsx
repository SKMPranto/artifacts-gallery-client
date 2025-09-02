import React, { useEffect } from "react";

const Title = (title) => {
  return useEffect(() => {
    document.title = `Artifacts Gallery | ${title}`;
  }, [title]);
};

export default Title;
