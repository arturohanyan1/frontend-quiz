import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "src/components/base-components/Header";
import { CATEGORIES } from "src/utils/constants";
import { ICategoryButtonType } from "src/types/common";
import CategoryButton from "src/components/base-components/CategoryButton";

const Main: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        <div className={styles.categories_wrapper}>
          {CATEGORIES.map((ctg: ICategoryButtonType) => (
            <CategoryButton key={ctg.id} data={ctg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
