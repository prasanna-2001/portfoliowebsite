import React from "react";
import { Skill } from "./skills";
import WhiteBoard from "../assets/WhiteBoard.png";
import BrickBreaker from "../assets/brickbreakergrp.png";


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

const GroupProjects = () => {
  const projectsData = [
    {
      img: BrickBreaker,
      title: "Brick-breaker",
      subtitle: "WebApp",
      desc: " Made with team .Just like the traditional brickbreaker game . With 3 amazing levels. So, grab on the console and get set play.",
      stack: ["HTML5 Canvas", "HTML", "CSS"],
      live: "https://dheet-developer-team.github.io/breakout-brick-game/",
      code: "https://github.com/Dheet-Developer-Team/breakout-brick-game",
    },
    {
      img: WhiteBoard,
      title: "White-Booard",
      subtitle: "WebApp",
      desc: "Made with team . It is an easy-to-use whiteboard made in vanilla JavaScript using HTML5 Canvas.",
      stack: ["HTML5 Canvas", "HTML", "CSS","localStorage"],
      live: "https://dheet-developer-team.github.io/drawingBoard/",
      code: "https://github.com/Dheet-Developer-Team/drawingBoard",
    },
    
  ];
  return (
    <section id="grpprojects">
      <h2>Group Projects</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default GroupProjects;