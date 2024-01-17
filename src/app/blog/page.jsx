import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/testId" className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quod
            illo doloribus rerum! Beatae explicabo animi eum nulla inventore
            dolor rem error sunt odio suscipit, modi sint. Natus, praesentium
            nihil.
          </p>
        </div>
      </Link>
      <Link href="/testId" className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quod
            illo doloribus rerum! Beatae explicabo animi eum nulla inventore
            dolor rem error sunt odio suscipit, modi sint. Natus, praesentium
            nihil.
          </p>
        </div>
      </Link>
      <Link href="/testId" className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quod
            illo doloribus rerum! Beatae explicabo animi eum nulla inventore
            dolor rem error sunt odio suscipit, modi sint. Natus, praesentium
            nihil.
          </p>
        </div>
      </Link>
      <Link href="/testId" className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quod
            illo doloribus rerum! Beatae explicabo animi eum nulla inventore
            dolor rem error sunt odio suscipit, modi sint. Natus, praesentium
            nihil.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
