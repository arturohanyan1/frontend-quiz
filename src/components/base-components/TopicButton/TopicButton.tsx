import cn from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

type IProps = {
  classname?: string;
  // data: ICategoryType;
};

const TopicButton: FC<IProps> = ({ classname }) => {
  return (
    <button className={cn(styles.button, classname)} role="button">
      <div className={styles.first_row}>
        <span className={styles.topic_order}>1</span>
        <div className={styles.topic_icon_wrapper}>+</div>
      </div>
      <div className={styles.second_row}>
        <span className={styles.button_text}>name</span>
      </div>
    </button>
  );
};

export default TopicButton;
