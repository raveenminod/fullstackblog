import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/13798633/pexels-photo-13798633.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Raveen Minod</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5687494/pexels-photo-5687494.jpeg"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          maxime ea, accusamus quam cupiditate dolorum modi sed vel nisi
          perspiciatis consequatur magnam quasi ad explicabo ipsa amet saepe
          tempora omnis.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
