import cn from "classnames";
import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { setCategory } from "src/store/slices/categorySlice";
import { useAppDispatch } from "src/hooks/reduxAppHooks";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "src/configs/routes";
import { useTranslation } from "react-i18next";
import { IQuestionButtonType } from "src/types/common";
import { makeQueryString } from "src/utils/helpers";
import { setTopic } from "src/store/slices/topicSlice";
import { setQuestion } from "src/store/slices/questionSlice";

type IProps = {
  classname?: string;
  data: IQuestionButtonType;
};

const QuestionButton: FC<IProps> = ({ classname, data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Actions
  const onClickHandler = useCallback(() => {
    dispatch(setCategory(data.category));
    dispatch(setTopic(data.topic));
    dispatch(setQuestion(data.index));
    navigate(
      `${EnumRoutes.QUESTION}?${makeQueryString({
        category: data.category,
        topic: data.topic,
        index: data.index,
      })}`
    );
  }, [data]);

  return (
    <button
      className={cn(
        styles.button,
        { [styles.viewed]: data.index === 1 },
        classname
      )}
      role="button"
      onClick={onClickHandler}
    >
      <span className={styles.button_text}>{t(data.index)}</span>
    </button>
  );
};

export default QuestionButton;
