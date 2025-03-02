import React from "react";
import video1 from "../assets/VideoBG1.mp4";
import video2 from "../assets/VideoBG2.mp4";
import video8 from "../assets/VideoBG8.mp4";
import video9 from "../assets/VideoBG9.mp4";
import wallpaper1 from "../assets/herobg.png";

const VideoBackground = ({ currentVideoIndex, isVideoBackground }) => {
  const videoSources = [
    video1,
    video2,
    video8,
    video9,
  ];
  const wallpaperSources = [wallpaper1];

  return (
    <div className="relative h-screen w-full">
      {isVideoBackground ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSources[currentVideoIndex % videoSources.length]}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={wallpaperSources[0]}
          alt="static background"
        />
      )}
    </div>
  );
};

export default VideoBackground;
