import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import CategoryButton from "../../components/CategoryButton";

const Main: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        <div className={styles.categories_wrapper}>
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
        </div>
      </div>
    </div>
  );
};

export default Main;
