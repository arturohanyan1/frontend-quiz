import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "src/components/base-components/Header";
import { getTopic } from "src/services/categories.service";
import { IQuestionButtonType } from "src/types/common";
import useErrorHandler from "src/hooks/useErrorHandler";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { makeQueryObj, makeQueryString } from "src/utils/helpers";
import Loader from "src/components/common/Loader";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxAppHooks";
import { setCategory } from "src/store/slices/categorySlice";
import { resetTopic, setTopic } from "src/store/slices/topicSlice";
import { EnumRoutes } from "src/configs/routes";
import { makeQuestionButtonData } from "src/utils/transformers";
import QuestionButton from "src/components/base-components/QuestionButton";

const Topic: FC = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Selectors
  const { category } = useAppSelector((state) => state.category);

  // States
  const [data, setData] = useState<IQuestionButtonType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Hooks
  const handleError = useErrorHandler();

  // API Calls
  const getTopicReq = async (category: string, topic: string) => {
    try {
      setLoading(true);
      const res = await getTopic(category, topic);
      if (res) {
        const newQuestionsData = makeQuestionButtonData(res, category, topic);
        setData(newQuestionsData);
      }
    } catch (error) {
      handleError(`${t("somethingWentWrong")} - getTopicReq`);
    } finally {
      setLoading(false);
    }
  };

  const onBackClick = (): void => {
    dispatch(resetTopic());
    navigate(
      `${EnumRoutes.CATEGORY}?${makeQueryString({ category: category })}`
    );
  };

  // Effects
  useEffect(() => {
    if (search.includes("category")) {
      const obj = makeQueryObj(search);
      dispatch(setCategory(obj.category));
      dispatch(setTopic(obj.topic));
      getTopicReq(obj.category, obj.topic);
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
          <div className={styles.questions_wrapper}>
            {data.map((el: IQuestionButtonType) => (
              <QuestionButton key={el.index} data={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Topic;
