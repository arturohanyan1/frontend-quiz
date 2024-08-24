import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import { useAppSelector } from "src/hooks/reduxAppHooks";

const Category: FC = () => {
  // Selectors
  const { category } = useAppSelector((state) => state.category);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>Category {category}</div>
    </div>
  );
};

export default Category;
