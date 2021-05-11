import React, { useState } from "react";

export const HideOrNotHide = () => {
  // Code here
  const [content, setContent] = useState(true);
  const handleClick = () => {
    setContent("Hello World");
  };
  return (
    <div>
      <button onClick={handleClick}>Reaveal Content</button>
      <p>{content}</p>
    </div>
  );
};

// const [myButtonText, SetmyButtonText] = React.useState(true);
// const content = "Hello World";

// if (myButtonText === true) {
//   return (
//     <>
//       <button onClick={() => SetmyButtonText(false)}>Hide Content</button>
//       <p>{content}</p>
//     </>
//   );
// } else {
//   return (
//     <>
//       <button onClick={() => SetmyButtonText(true)}>Reavel Content</button>
//     </>
//   );
// }
