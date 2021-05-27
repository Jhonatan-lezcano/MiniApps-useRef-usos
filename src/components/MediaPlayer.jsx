import React, { useRef, useState } from "react";
import Drink from "../assets/Drink.mp4";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Media Player</h1>
      <video
        width="500"
        src={Drink}
        ref={videoRef}
        onClick={handlePlay}
      ></video>
      <br />
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default MediaPlayer;
