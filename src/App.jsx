import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Profile } from "./components";
import VideoBackground from "./components/VideoBackground";

const App = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoBackground, setIsVideoBackground] = useState(false);

  const videoCount = 11;

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoCount);
    setIsVideoBackground(true);
  };

  useEffect(() => {
    setIsVideoBackground(false);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative">
          <VideoBackground
            currentVideoIndex={currentVideoIndex}
            isVideoBackground={isVideoBackground}
          />
          <div className="absolute inset-0">
            <Navbar toggleBG={nextVideo} />
            <Hero />
          </div>
        </div>
        <div className="relative z-0">
      <StarsCanvas density={1000000} size={0.0003} color="#915eff" />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Profile />
      <Contact />
    </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
