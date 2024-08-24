import cn from "classnames";
import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { ICategoryType } from "../../types/common";

type IProps = {
  classname?: string;
  data: ICategoryType;
};

const CategoryButton: FC<IProps> = ({ classname, data }) => {
  // Actions
  const onClickHandler = useCallback(() => {
    console.log(data);
  }, [data]);

  return (
    <button
      className={cn(styles.button, classname)}
      role="button"
      onClick={onClickHandler}
    >
      <span className={styles.button_text}>{data.name}</span>
    </button>
  );
};

export default CategoryButton;
