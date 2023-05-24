import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import AWrapper from "../about/AWrapper";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default Team;
