import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";

const Main: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>444</div>
    </div>
  );
};

export default Main;
