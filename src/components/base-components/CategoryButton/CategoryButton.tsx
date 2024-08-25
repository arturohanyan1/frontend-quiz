import cn from "classnames";
import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { setCategory } from "src/store/slices/categorySlice";
import { useAppDispatch } from "src/hooks/reduxAppHooks";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "src/configs/routes";
import { useTranslation } from "react-i18next";
import { ICategoryButtonType } from "src/types/common";
import { makeQueryString } from "src/utils/helpers";

type IProps = {
  classname?: string;
  data: ICategoryButtonType;
};

const CategoryButton: FC<IProps> = ({ classname, data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Redux Actions
  const dispatch = useAppDispatch();

  // Actions
  const onClickHandler = useCallback(() => {
    dispatch(setCategory(data.id));
    navigate(`${EnumRoutes.CATEGORY}?${makeQueryString({ id: data.id })}`);
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
