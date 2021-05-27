import React, { useEffect, useRef, useState } from "react";

const RenderApp = () => {
  const [text, setText] = useState("");
  const rendersRef = useRef(1);

  useEffect(() => {
    rendersRef.current++;
  });

  return (
    <div>
      <h1>Render App</h1>
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>Renders: {rendersRef.current} </h3>
    </div>
  );
};

export default RenderApp;
