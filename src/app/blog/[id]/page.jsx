import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  //data dynamicaly changing use {cache: 'no-store}
  // The return value is not serialized
  // You can return Date, Map, Set, etc.

  //Hanndle error
  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}> {data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Raveen Minod</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19882770/pexels-photo-19882770/free-photo-of-surfur-with-a-surfboard-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          ipsum quisquam modi magnam, provident a. Delectus, repellendus quidem
          minima corporis dignissimos non libero explicabo. Debitis aut sapiente
          libero doloremque incidunt! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Expedita ex, vel ducimus cum repellat iste aliquid
          dolor quaerat? Velit amet nemo beatae itaque eveniet eaque, ut
          repellendus suscipit rem obcaecati?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          dignissimos at dolor repellat tempora, quos modi, fugiat pariatur
          animi facere nesciunt earum nemo quibusdam provident nostrum
          doloremque. Est, cumque quo? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cupiditate nihil similique distinctio velit,
          corporis eveniet nostrum natus magnam pariatur commodi sapiente
          incidunt eum earum molestias laudantium? Quod tempore ipsum rem! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          <br />
          Dicta, quod quidem repellat incidunt autem exercitationem quae
          perferendis architecto debitis molestias excepturi optio repellendus
          recusandae corporis reprehenderit vel ullam aliquid minima.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
