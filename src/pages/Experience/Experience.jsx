import React from "react";
import styles from "./Experience.module.scss";
const { body_exp, body_links } = styles;
const Experience = () => {
  return (
    <div className={body_exp}>
      <article>
        <h1>Freelance FrontEnd Consultant</h1>
        <p>
          Web layout and responsive in Angular for the platform of an exchange
          agency, a new module was added to show the programs and types of
          universities available. As well as, modifications were added in HTML
          and CSS according to the design suggested by UX/UI. <br /> <br />
          Preparation of requests to Mongo from the back-end to show the number
          of available universities and programs offered by the agency. <br />
          <br /> Management of tools such as Jira, Bitbucket, Mongo, Postman,
          Sourcetree and Visual Studio Code.
        </p>
      </article>
      <article>
        <h1>Front End Developer</h1>
        <p>
          Development of a social network where users can share messages with
          each other. Implemented Firebase, React.js, Vite.js, React Router,
          UseReducer, Customhooks, Styled-Components, Sass, Css (flexbox and
          grid), Html, and JavaScript, Git, and GitLens. URL:
          <a className={body_links} href="https://users-d9f6d.firebaseapp.com/">
            Tweets
          </a>
          <br />
          <br />
          Development of GIFS search engine using react hooks and requests to
          the GIFOS API. URL:
          <a className={body_links} href="https://t2es5.sse.codesandbox.io/">
            Gifos
          </a>
          <br />
          <br />
          Hotels searching in React.js for tourist when they need get a room to
          rest. So, this webpage help to book a hotel in different places and
          prices where users can select their comfort. URL:
          <a className={body_links} href="https://4uv0c.csb.app/">
            Hotels
          </a>{" "}
          <br />
          <br /> PodCast Channel layout to play content, navigation and
          compatibility with multiple browsers and devices (Media Queries). URL:
          <a
            className={body_links}
            href="https://brayansuarezsprint1.netlify.app/"
          >
            PodCast
          </a>
        </p>
      </article>
    </div>
  );
};

export default Experience;
