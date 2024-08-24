import cn from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

type IProps = {
  classname?: string;
};

const CategoryButton: FC<IProps> = ({ classname }) => {
  return (
    <button className={cn(styles.button, classname)} role="button">
      <span className={styles.button_text}>text</span>
    </button>
  );
};

export default CategoryButton;
