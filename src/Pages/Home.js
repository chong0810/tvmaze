import React from "react";
import Background from "../Asset/background.mp4";


const Home = () => {
  return (
    <div>
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
