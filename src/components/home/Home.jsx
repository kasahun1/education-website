import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./HBlog";
import HAbout from "./HAbout";
import Hprice from "./HPrice";
import Testimonal from "./testimonial/Testimonial";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;
