import React, { FC } from "react";
import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left_row}></div>
      <div className={styles.middle_row}>QUIZ</div>
      <div className={styles.right_row}></div>
    </header>
  );
};

export default Header;
