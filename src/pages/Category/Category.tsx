import { FC } from "react";
import styles from "./styles.module.scss";
import { useAppSelector } from "src/hooks/reduxAppHooks";
import TopicButton from "src/components/base-components/TopicButton";
import Header from "src/components/base-components/Header";

const Category: FC = () => {
  // Selectors
  const { category } = useAppSelector((state) => state.category);

  console.log(category);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        <div className={styles.topics_wrapper}>
          <TopicButton />
        </div>
      </div>
    </div>
  );
};

export default Category;
