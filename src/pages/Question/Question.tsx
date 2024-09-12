import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "src/components/base-components/Header";
import { getQuestion } from "src/services/categories.service";
import { IQuestionDataType } from "src/types/common";
import useErrorHandler from "src/hooks/useErrorHandler";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { makeQueryObj, makeQueryString } from "src/utils/helpers";
import Loader from "src/components/common/Loader";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxAppHooks";
import { setCategory } from "src/store/slices/categorySlice";
import { setTopic } from "src/store/slices/topicSlice";
import { EnumRoutes } from "src/configs/routes";
import { resetQuestion, setQuestion } from "src/store/slices/questionSlice";

const Question: FC = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Selectors
  const { category } = useAppSelector((state) => state.category);
  const { topic } = useAppSelector((state) => state.topic);

  // States
  const [data, setData] = useState<IQuestionDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Hooks
  const handleError = useErrorHandler();

  // API Calls
  const getQuestionReq = async (
    category: string,
    topic: string,
    index: number
  ) => {
    try {
      setLoading(true);
      const res = await getQuestion(category, topic, index);
      if (res) {
        setData(res);
      }
    } catch (error) {
      handleError(`${t("somethingWentWrong")} - getTopicReq`);
    } finally {
      setLoading(false);
    }
  };

  const onBackClick = (): void => {
    dispatch(resetQuestion());
    navigate(
      `${EnumRoutes.TOPIC}?${makeQueryString({
        category: category,
        topic: topic,
      })}`
    );
  };

  // Effects
  useEffect(() => {
    if (search.includes("category")) {
      const obj = makeQueryObj(search);
      dispatch(setCategory(obj.category));
      dispatch(setTopic(obj.topic));
      dispatch(setQuestion(obj.index));
      getQuestionReq(obj.category, obj.topic, obj.index);
    }
  }, [search]);

  console.log(data);

  return (
    <div className={styles.page}>
      <Header showBackButton onBack={onBackClick} />
      <div className={styles.page_content}>
        {loading ? (
          <Loader />
        ) : !data ? (
          <div className={styles.empty_data}>
            <span>{t("noData")}</span>
          </div>
        ) : (
          <div className={styles.question_wrapper}>
            <div className={styles.question}>{data.question}</div>
            <br />
            <div className={styles.answer}>{data.answer}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
