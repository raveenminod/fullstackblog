import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/15099175/pexels-photo-15099175/free-photo-of-pink-flowers-gaura.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill={true} alt="" className={styles.img} />

        <div className={styles.img}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
    <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            quisquam minima vel, esse doloremque repudiandae quo, consectetur
            possimus voluptates voluptatum laudantium quaerat quam, ipsum
            provident reiciendis earum non similique. Tempora.
            <br />
            quisquam minima vel, esse doloremque repudiandae quo, consectetur
            <br />
            quisquam minima vel, esse doloremque repudiandae quo, consectetur.
            quisquam minima vel, esse doloremque repudiandae quo, consectetur
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>

        </div>
      </div>
    </div>
  );
};

export default About;
