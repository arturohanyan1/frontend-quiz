import cn from "classnames";
import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { SvgIcon } from "src/components/common/SvgIcon";
import { icons } from "src/configs/icons";
import { ITopicButtonType } from "src/types/common";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { makeQueryString } from "src/utils/helpers";
import { useAppDispatch } from "src/hooks/reduxAppHooks";
import { setCategory } from "src/store/slices/categorySlice";
import { setTopic } from "src/store/slices/topicSlice";
import { EnumRoutes } from "src/configs/routes";

type IProps = {
  classname?: string;
  data: ITopicButtonType;
};

const TopicButton: FC<IProps> = ({ classname, data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Actions
  const onClickHandler = useCallback(() => {
    dispatch(setCategory(data.category));
    dispatch(setTopic(data.name));
    navigate(
      `${EnumRoutes.TOPIC}?${makeQueryString({
        category: data.category,
        topic: data.name,
      })}`
    );
  }, [data]);

  return (
    <button
      onClick={onClickHandler}
      className={cn(styles.button, classname)}
      role="button"
    >
      <div className={styles.first_row}>
        <span className={styles.topic_order}>{`${data.questionsCount}`}</span>
        <div className={styles.topic_icon_wrapper}>
          <SvgIcon src={icons.coding} size="sm" color="topicButton" />
        </div>
      </div>
      <div className={styles.second_row}>
        <span className={styles.button_text}>{t(data.name)}</span>
      </div>
    </button>
  );
};

export default TopicButton;
