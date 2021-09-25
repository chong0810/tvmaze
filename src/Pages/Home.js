import React from "react";
import Background from "../Asset/background.mp4";
import { Col, Row } from "react-bootstrap";


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
      <Row className="justify-content-center">
        <h1 style={{
            zIndex: "1"
        }}>Welcome to TVMAZE</h1>
        </Row>
      
              
          
      
    </div>
  );
};

export default Home;
