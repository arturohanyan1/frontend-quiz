import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TopicButton from "src/components/base-components/TopicButton";
import Header from "src/components/base-components/Header";
import { getCategory } from "src/services/categories.service";
import { ITopicButtonType } from "src/types/common";
import { makeTopicButtonData } from "src/utils/transformers";
import useErrorHandler from "src/hooks/useErrorHandler";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { makeQueryObj } from "src/utils/helpers";
import Loader from "src/components/common/Loader";

const Category: FC = () => {
  const { t } = useTranslation();
  const { search } = useLocation();

  // States
  const [data, setData] = useState<ITopicButtonType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Hooks
  const handleError = useErrorHandler();

  // API Calls
  const getCategoryReq = async (id: string) => {
    try {
      setLoading(true);
      const res = await getCategory(id);
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
    if (search.includes("id")) {
      const obj = makeQueryObj(search);
      getCategoryReq(obj.id);
    }
  }, [search]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page_content}>
        {loading ? (
          <Loader />
        ) : !data ? (
          <div className={styles.empty_data}>
            <span>{t("noData")}</span>
          </div>
        ) : (
          <div className={styles.topics_wrapper}>
            {data.map((el: ITopicButtonType) => (
              <TopicButton key={el.name} data={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
