import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Experience from "../../pages/Experience/Experience";
import Home from "../../pages/Home/Home";
import Skills from "../../pages/Skills/Skills";
import styles from "./Body.module.scss";

const { body, aside_name, aside_1, aside_2, section } = styles;

const Body = () => {
  return (
    <div className={body}>
      <aside className={`${aside_name} ${aside_1}`}>Skills</aside>
      <section className={section}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </section>
      <aside className={`${aside_name} ${aside_2}`}>Contact</aside>
    </div>
  );
};

export default Body;
