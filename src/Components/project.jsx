import React from "react";
import { Skill } from "./skills";
import CodeImg from "../assets/pankajUnsplash.jpg";

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
      img: CodeImg,
      title: "playnloot",
      subtitle: "WebApp",
      desc: "A platform for PUBG players to host or participate in various tournaments with cash prizes.",
      stack: ["reactJS", "Firebase"],
      live: "https://playandloot.web.app/",
      code: "https://github.com/tooGeeks/playnloot",
    },
    {
      img: CodeImg,
      title: "onlyStore",
      subtitle: "WebApp",
      desc: "A modern eCommerce Web App developed using only frontend technologies, and featuring fully functional localStorage based login, cart, wishlist and order system.",
      stack: ["reactJS", "redux toolkit", "material-ui", "localStorage"],
      live: "https://knd-devsnest.github.io/onlystore/#/",
      code: "https://github.com/KND-Devsnest/onlystore",
    },
    {
      img: CodeImg,
      title: "slateboard",
      subtitle: "WebApp",
      desc: "SlateBoard is an easy-to-use whiteboard made in vanilla JavaScript using HTML5 Canvas.",
      stack: ["HTML5 Canvas", "HTML5", "CSS3"],
      live: "https://knd-devsnest.github.io/slateboard/",
      code: "https://github.com/KND-Devsnest/slateboard",
    },
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;