import React from "react";

export const Skill = (props) => {
  return <li className="skill"># {props.name}</li>;
};

const Skills = () => {
  let mySkills = ["HTML", "CSS", "JavaScript", "reactJS", "Bootstrap", "redux", "SQL", "git and Github "];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {mySkills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;