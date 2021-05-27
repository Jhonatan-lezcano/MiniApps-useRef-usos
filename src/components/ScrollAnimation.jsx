import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const [background, setBackground] = useState("pink");
  const containerRef = useRef();

  const styles = { height: "180vh", background, transition: "0.5s" };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const { y } = container.getBoundingClientRect();
      console.log(y);

      const backgroundColor = y <= 500 ? "orange" : "pink";
      setBackground(backgroundColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={styles} ref={containerRef}>
        <h1>ScrollAnimation</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
