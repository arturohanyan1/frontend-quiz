import cn from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

type IProps = {
  classname?: string;
  size?: "sm" | "md" | "lg";
};

const Loader: FC<IProps> = ({ classname, size = "md" }) => {
  return (
    <div
      className={cn(
        styles.loader,
        { [styles[`loader_size__${size}`]]: size },
        classname
      )}
    ></div>
  );
};

export default Loader;
