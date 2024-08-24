import cn from "classnames";
import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { ICategoryType } from "../../types/common";
import { setCategory } from "src/store/slices/categorySlice";
import { useAppDispatch } from "src/hooks/reduxAppHooks";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "src/configs/routes";
import { useTranslation } from "react-i18next";

type IProps = {
  classname?: string;
  data: ICategoryType;
};

const CategoryButton: FC<IProps> = ({ classname, data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Actions
  const onClickHandler = useCallback(() => {
    dispatch(setCategory(data.id));
    navigate(EnumRoutes.CATEGORY);
  }, [data]);

  return (
    <button
      className={cn(styles.button, classname)}
      role="button"
      onClick={onClickHandler}
    >
      <span className={styles.button_text}>{t(data.name)}</span>
    </button>
  );
};

export default CategoryButton;
