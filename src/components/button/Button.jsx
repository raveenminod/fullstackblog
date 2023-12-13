import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({text, url}) => {
  return (
    <Link>
      <div className={styles.container}>Button</div>
    </Link>
  );
};

export default Button;
