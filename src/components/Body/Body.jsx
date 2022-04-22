import React from "react";
import Home from "../../pages/Home/Home";
import styles from "./Body.module.scss";

const { body, aside_name } = styles;

const Body = () => {
  return (
    <div className={body}>
      <aside className={aside_name}>Skills</aside>
      <section>
        <Home />
      </section>
      <aside className={aside_name}>Contact</aside>
    </div>
  );
};

export default Body;
