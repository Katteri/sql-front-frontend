import { BLACK_COLOR, WHITE_COLOR } from "../colors";

import styles from "./text.module.scss";

type TextProps = {
  size: string,
  color?: typeof WHITE_COLOR | typeof BLACK_COLOR,
  lineHeight?: string,
  className?: string,
  children: React.ReactNode,
}

export const Text = ({ size, className, lineHeight="125%", color = BLACK_COLOR, children }: TextProps) => {
 return (
  <p
    className={`${styles.text} ${className}`}
    style={{
      color,
      lineHeight,
      fontSize: size,
    }}
  >
    {children}
  </p>
 );
};
