import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";

const Main: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}></div>
    </div>
  );
};

export default Main;
