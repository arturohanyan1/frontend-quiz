import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useAppSelector } from "src/hooks/reduxAppHooks";
import TopicButton from "src/components/base-components/TopicButton";
import Header from "src/components/base-components/Header";
import { getCategory } from "src/services/categories.service";
import { ITopicButtonType } from "src/types/common";
import { makeTopicButtonData } from "src/utils/transformers";
import useErrorHandler from "src/hooks/useErrorHandler";
import { useTranslation } from "react-i18next";

const Category: FC = () => {
  const { t } = useTranslation();

  // Selectors
  const { category } = useAppSelector((state) => state.category);

  // States
  const [data, setData] = useState<ITopicButtonType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Hooks
  const handleError = useErrorHandler();

  // API Calls
  const getCategoryReq = async (category: string) => {
    try {
      setLoading(true);
      const res = await getCategory(category);
      handleError(`${t("somethingWentWrong")} - getCategoryReq`);
      if (res) {
        const newTopicsData = makeTopicButtonData(res);
        setData(newTopicsData);
      }
    } catch (error) {
      handleError(`${t("somethingWentWrong")} - getCategoryReq`);
    } finally {
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    if (category) {
      getCategoryReq(category);
    }
  }, [category]);

  console.log(loading, data, category);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        <div className={styles.topics_wrapper}>
          <TopicButton data={{ name: "name", questionsCount: 3, index: 1 }} />
        </div>
      </div>
    </div>
  );
};

export default Category;
