import React, { useState } from "react";

export const HideOrNotHide = () => {
  // Code here
  const [content, setContent] = useState(true);
  const handleClick = () => {
    setContent(!content);
  };
  return (
    <div>
      <button onClick={handleClick}>{content ? "Hide content" : "Reveal content"}</button>
      {content && <p>Hello World </p>}
    </div>
  );
};
