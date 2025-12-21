import { colors } from "../colors";

import styles from "./text.module.scss";

type TextProps = {
  size?: string,
  color?: keyof typeof colors,
  lineHeight?: string,
  className?: string,
  margin?: string,
  children: React.ReactNode,
}

export const Text = ({ className, margin="0", size="1vw", lineHeight="125%", color="black", children }: TextProps) => {
 return (
  <p
    className={`${styles.text} ${className}`}
    style={{
      color: colors[color],
      lineHeight,
      fontSize: size,
      margin,
    }}
  >
    {children}
  </p>
 );
};
