import cn from "classnames";
import { FC } from "react";
import { ReactSVG } from "react-svg";
import _styles from "./styles.module.scss";

type Props = {
  className?: string;
  onClick?: () => void;
  pointer?: boolean;
  rotate?: "90" | "180" | "270" | "360";
  color?:
    | "primary"
    | "secondary"
    | "brand"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "error"
    | "positive"
    | "negative"
    | "navigation"
    | "muted"
    | "dark"
    | "light"
    | "highlighted"
    | "topicButton";
  size?:
    | "xs"
    | "sm"
    | "msm"
    | "xmd"
    | "md"
    | "mdm"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl"
    | "full"
    | "default";
  src: string;
  top?: "1" | "2" | "3" | "4";
  id?: string;
  styles?: Record<string, string>;
  display?: "block" | "inline-block";
};

export const SvgIcon: FC<Props> = ({
  className,
  pointer,
  onClick,
  rotate,
  color,
  size,
  src,
  top,
  id,
  styles = {},
  display,
}) => {
  return (
    <ReactSVG
      style={styles}
      className={cn(
        _styles.svgIcon,
        {
          [_styles[`svgIcon_rotate_${rotate}`]]: rotate,
          [_styles[`svgIcon_color_${color}`]]: color,
          [_styles[`svgIcon_size_${size}`]]: size,
          [_styles[`svgIcon_top_${top}`]]: top,
          [_styles["svgIcon_pointer"]]: pointer,
          [_styles[`svgIcon_display_${display}`]]: display,
        },
        className
      )}
      onClick={onClick}
      src={src}
      id={id}
    />
  );
};
