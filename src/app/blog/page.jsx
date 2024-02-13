import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    next: { revalidate: 10 },
  });
  //data dynamicaly changing use {cache: 'no-store}
  // The return value is not serialized
  // You can return Date, Map, Set, etc.

  //Hanndle error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.section} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
