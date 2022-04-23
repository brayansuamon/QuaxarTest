import React from "react";
import styles from "./Skills.module.scss";

const { body_skills, text_skills } = styles;

const Skills = () => {
  return (
    <div className={body_skills}>
      <h1>Tools used</h1>
      <ul>
        <li className={text_skills}>
          <img src="./Images/react.svg" alt="React" />
          <span>React (Html,CSS, JavaScript, Hooks)</span>
        </li>
        <li className={text_skills}>
          <img src="/Images/firebase.svg" alt="Firebase" />
          <span> Firebase</span>
        </li>
        <li className={text_skills}>
          <img src="/Images/github.svg" alt="Github" />
          <span>Github</span>
        </li>
        <li className={text_skills}>
          <img src="/Images/linux.png" alt="Linux" />
          <span>Linux</span>
        </li>
        <li className={text_skills}>
          <img src="/Images/bitbucket.svg" alt="Bitbucket" />
          <span>BitBucket</span>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
