import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/12756665/pexels-photo-12756665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus
            ea facilis sit nostrum impedit labore accusantium rem recusandae
            iusto. Delectus reprehenderit praesentium veniam eius. Enim fuga
            rerum minima odio?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus
            ea facilis sit nostrum impedit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus
            ea facilis sit nostrum impedit labore accusantium rem recusandae
            iusto. Delectus reprehenderit praesentium veniam eius. Enim fuga
            rerum minima odio?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            qui nam repellat consequuntur assumenda aperiam sint nobis minus
            inventore temporibus nihil, nemo quo reprehenderit! Saepe totam
            corrupti nemo placeat consequuntur.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            qui nam repellat
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
