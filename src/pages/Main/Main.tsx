import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import CategoryButton from "../../components/CategoryButton";
import { CATEGORIES } from "../../utils/constants";
import { ICategoryType } from "../../types/common";

const Main: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        <div className={styles.categories_wrapper}>
          {CATEGORIES.map((ctg: ICategoryType) => (
            <CategoryButton key={ctg.id} data={ctg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
