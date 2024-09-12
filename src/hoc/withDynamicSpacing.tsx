import { ComponentType, CSSProperties, HTMLAttributes } from 'react';

interface ISpacingProps {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const withDynamicSpacing = <P extends HTMLAttributes<HTMLElement> & ISpacingProps>(
  WrappedComponent: ComponentType<P>
) => {
  return function WithDynamicSpacing(props: P) {
    const { mt, mb, ml, mr, pt, pb, pl, pr, ...rest } = props;

    const marginStyle: CSSProperties = {
      marginTop: mt ? `${mt}px` : undefined,
      marginBottom: mb ? `${mb}px` : undefined,
      marginLeft: ml ? `${ml}px` : undefined,
      marginRight: mr ? `${mr}px` : undefined,
    };

    const paddingStyle: CSSProperties = {
      paddingTop: pt ? `${pt}px` : undefined,
      paddingBottom: pb ? `${pb}px` : undefined,
      paddingLeft: pl ? `${pl}px` : undefined,
      paddingRight: pr ? `${pr}px` : undefined,
    };

    const mergedStyle: CSSProperties = {
      ...props.style,
      ...marginStyle,
      ...paddingStyle,
    };

    return <WrappedComponent {...(rest as P)} style={mergedStyle} />;
  };
};

export { withDynamicSpacing };
export type { ISpacingProps };
