import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.contain}>
          <h1 className={styles.title}>Testing</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            repellendus maxime excepturi hic quae fuga dolor. Eum aliquam
            dolorem quas tenetur deleniti quos, omnis at. Officiis quidem
            quaerat sapiente doloremque.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.contain}>
          <h1 className={styles.title}>Testing</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            repellendus maxime excepturi hic quae fuga dolor. Eum aliquam
            dolorem quas tenetur deleniti quos, omnis at. Officiis quidem
            quaerat sapiente doloremque.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.contain}>
          <h1 className={styles.title}>Testing</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            repellendus maxime excepturi hic quae fuga dolor. Eum aliquam
            dolorem quas tenetur deleniti quos, omnis at. Officiis quidem
            quaerat sapiente doloremque.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src="https://images.pexels.com/photos/7790175/pexels-photo-7790175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
