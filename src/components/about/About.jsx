import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import HAbout from "../home/HAbout";

const About = () => {
  return (
    <>
      <Back title="About Us" />
      <AboutCard />
      <HAbout />
    </>
  );
};

export default About;
