import React from "react";
import { Skill } from "./skills";
import DrumSet from "../assets/drumset.jpg";

const ProjectCard = ({ img, title, subtitle, desc, stack, live, code }) => {
  return (
    <div className="projectCard">
      <img src={img} />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="desc">{desc}</div>
      <ul className="teckStack">
        {stack.map((tech) => (
          <Skill key={tech} name={tech} />
        ))}
      </ul>
      <div className="links">
        <a href={live} target="_blank">
          Live
        </a>
        <a href={code} target="_blank">
          Code
        </a>
      </div>
    </div>
  );
};

const Challenges = () => {
  const projectsData = [
    {
      img: DrumSet,
      title: "DrumSey",
      subtitle: "WebApp",
      desc: "A javascript based DRUMSET like webapp",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "https://main--gregarious-pixie-741845.netlify.app/",
      code: "https://github.com/prasanna-2001/JavaScript30Challenge/tree/main/DAY-1",
    },
    
  ];
  return (
    <section id="Challenges">
      <h2>Javascript30 Challange</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Challenges;