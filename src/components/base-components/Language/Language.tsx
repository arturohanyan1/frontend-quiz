import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Language: FC = () => {
  // Hooks
  const { t, i18n } = useTranslation();

  // States
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("lang") || "en"
  );

  // Actions
  const handleChangeLanguage = (lang: string): void => {
    if (lang && typeof lang === "string") {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    }
  };

  console.log(language, t("language"));

  return (
    <div className={styles.language}>
      <button
        style={{ background: "red" }}
        onClick={() => handleChangeLanguage("en")}
      >
        en
      </button>
      <button
        style={{ background: "red" }}
        onClick={() => handleChangeLanguage("ru")}
      >
        ru
      </button>
    </div>
  );
};

export default Language;
