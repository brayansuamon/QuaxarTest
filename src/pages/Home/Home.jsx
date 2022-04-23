import React from "react";
import styles from "./Home.module.scss";

const { home, image_home, name_home } = styles;
const Home = () => {
  return (
    <div className={home}>
      <div className={image_home}>
        <img src="./Images/profile.jpg" alt="Profile" />
      </div>
      <section className={name_home}>
        <h1>Brayan Aleandro Suarez Monroy</h1>
        <br />
        <h2>Ingeniero y desarrollador web</h2>
      </section>
    </div>
  );
};

export default Home;
