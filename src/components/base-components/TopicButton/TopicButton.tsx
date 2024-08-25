import cn from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";
import { SvgIcon } from "src/components/common/SvgIcon";
import { icons } from "src/configs/icons";
import { ITopicButtonType } from "src/types/common";

type IProps = {
  classname?: string;
  data: ITopicButtonType;
};

const TopicButton: FC<IProps> = ({ classname, data }) => {
  return (
    <button className={cn(styles.button, classname)} role="button">
      <div className={styles.first_row}>
        <span className={styles.topic_order}>{`${data.questionsCount}`}</span>
        <div className={styles.topic_icon_wrapper}>
          <SvgIcon src={icons.coding} size="sm" color="topicButton" />
        </div>
      </div>
      <div className={styles.second_row}>
        <span className={styles.button_text}>{data.name}</span>
      </div>
    </button>
  );
};

export default TopicButton;
