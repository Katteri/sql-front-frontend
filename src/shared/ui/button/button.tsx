import { colors } from "../colors";

import styles from "./button.module.scss";

type ButtonProps = {
  color: keyof typeof colors,
  hoverColor: keyof typeof colors,
  width: string,
  padding: string,
  type?: "submit" | "reset" | "button", 
  children: string,
}

export const Button = ({
  color,
  hoverColor,
  width,
  padding,
  type = "button",
  children
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      style={{
        "--color": colors[color],
        "--hover-color": colors[hoverColor],
        "--width": width,
        "--padding": padding,
      } as React.CSSProperties}
    >
      {children}
    </button>
  );
};
