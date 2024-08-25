import React, { FC } from "react";
import styles from "./styles.module.scss";
import { SvgIcon } from "src/components/common/SvgIcon";
import { icons } from "src/configs/icons";
import { useTranslation } from "react-i18next";

type IProps = {
  showSettingsButton?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
};

const Header: FC<IProps> = ({
  showSettingsButton = true,
  showBackButton,
  onBack,
}) => {
  const { t } = useTranslation();

  // Actions
  const onBackClick = (): void => {
    if (!!onBack) {
      onBack();
    }
  };

  const onSettingsClick = (): void => {
    console.log("Settings TBD");
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.left_row}>
          {showBackButton && (
            <button
              className={styles.back_button}
              role="button"
              onClick={onBackClick}
            >
              <SvgIcon
                src={icons.chevron_left}
                size="xmd"
                className={styles.back_icon}
                color="primary"
              />
              <span className={styles.back_text}>{t("back")}</span>
            </button>
          )}
        </div>
        <div className={styles.middle_row}>QUIZ</div>
        <div className={styles.right_row}>
          {showSettingsButton && (
            <button
              className={styles.settings_button}
              role="button"
              onClick={onSettingsClick}
            >
              <SvgIcon
                src={icons.settings}
                size="xmd"
                className={styles.settings__icon}
                color="primary"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
