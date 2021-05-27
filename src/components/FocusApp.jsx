import React, { useRef, useState } from "react";

const FocusApp = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleFocus = () => {
    textRef.current.focus();
  };

  return (
    <div>
      <h1>FocusApp</h1>
      <input
        type="text"
        value={text}
        ref={textRef}
        onChange={() => setText(textRef.current.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusApp;
