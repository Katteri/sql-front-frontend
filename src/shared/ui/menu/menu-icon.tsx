import { colors } from "../colors";

import styles from "./menu-icon.module.scss";

type MenuProps = {
  color?: keyof typeof colors,
};

export const MenuIcon = ({ color="black" }: MenuProps) => {
  return (
    <div
      className={styles.menu}
      style={{ color: colors[color] }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
