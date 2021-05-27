import React, { useRef, useState } from "react";

const CopyApp = () => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef();

  const handleCopy = () => {
    const input = textRef.current;
    input.select();
    document.execCommand("copy");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Copy App</h1>
      <input
        type="text"
        value={text}
        ref={textRef}
        onChange={() => setText(textRef.current.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {isCopied && <p>copied</p>}
    </div>
  );
};

export default CopyApp;
