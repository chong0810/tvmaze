import React from "react";
import Background from "../Asset/background.mp4";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="App">
      <h1 className="textChange">Welcome to TVMAZE</h1>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
