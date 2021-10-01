import React from "react";
import { Skill } from "./skills";
import MarioMac from "../assets/mariomac.png";
import BricBreaker from "../assets/Brickbreaker.png";
import MemoryGame from "../assets/memmap.png"

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

const Projects = () => {
  const projectsData = [
    {
      img: MarioMac,
      title: "MarioMac",
      subtitle: "WebApp",
      desc: "A web game for kids . Our childhood hero  Mr. Super Mario is featuring the game with Mr. Dragon as a villian. The hero has to dodge the villian and th speed",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "https://prasanna-2001.github.io/Mario-mac/",
      code: "https://github.com/prasanna-2001/Mario-mac",
    },
    {
      img: BricBreaker,
      title: "Brick-Breaker",
      subtitle: "WebApp",
      desc: "Just like the traditional brickbreaker game . With 3 amazing levels. So, grab on the console and get set play ",
      stack: ["HTML Canvas", "HTML", "CSS", "Javascript"],
      live: "https://happy-shannon-e022e0.netlify.app/",
      code: "https://github.com/prasanna-2001/BRICK_BREAKER",
    },
    {
      img: MemoryGame,
      title: "MemoryCards",
      subtitle: "WebApp",
      desc: "Sharpen your remembering skills.  ",
      stack: ["HTML","CSS", "jaVASCRIPT"],
      live: "https://prasanna-2001.github.io/Memory-Game-Cards-/",
      code: "https://github.com/prasanna-2001/Memory-Game-Cards-",
    },
  ];
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;