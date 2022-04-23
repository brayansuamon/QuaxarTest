import React from "react";
import styles from "./About.module.scss";

const { body_about } = styles;
const About = () => {
  return (
    <div className={body_about}>
      <h1>About me</h1>
      <article>
        I am an engineer and Front-End Web Developer. I have skills for the
        generation of user interfaces using tools such as React.js, HTML, CSS,
        JavaScript, SASS, ECMAScript, Linux, and GitHub from which I am offering
        a comprehensive and understandable interface for all audiences in
        particular for my peers through good programming practices.
        <br /> <br /> I think innovation is the way to forge the future of
        companies, and that is a reason why I am constantly learning and
        researching. Multicultural work is facilitated for me, and I enjoy
        having different points of view.
      </article>
    </div>
  );
};

export default About;
